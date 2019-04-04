package sopra.formation.controller;

import java.util.Optional;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import sopra.monRdv.dao.IPatientRepository;
import sopra.monRdv.model.Patient;

@Controller
@RequestMapping("/patient")
public class PatientController {
	@Autowired
	private IPatientRepository patientRepo;
	
	@GetMapping("/edit")
	public String edit(@RequestParam("id") Long id, Model model) {
		Optional<Patient> opt = patientRepo.findById(id);

		if (opt.isPresent()) {
			model.addAttribute("monPatient", opt.get());
		}
		return "patient/form";
	}

	@PostMapping("/save")
	public String save(@Valid @ModelAttribute("monPatient") Patient patient, BindingResult result) {
		if(result.hasErrors()) {
			return "patient/form";
		}
		
		patientRepo.save(patient);

		return "redirect:/patient/list";
	}
	
	@GetMapping("/cancel")
	public String cancel() {

		return "forward:/patient/form";
	}
}
