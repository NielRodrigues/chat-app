import Participant from "../models/Participant";

class ParticipantController {
  async index(request, response) {
    const { user_id, person_id } = request.params;
    console.log("\n\n\nUser_id:", user_id);
    console.log("\nPerson_id:", person_id);

    const participant = await Participant.findOne({
      where: {
        user_id,
        person_id,
      },
    });

    return response.json(participant);
  }
}

export default new ParticipantController();
