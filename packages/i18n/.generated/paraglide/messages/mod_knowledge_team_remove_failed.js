/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_Remove_FailedInputs */

const en_mod_knowledge_team_remove_failed = /** @type {(inputs: Mod_Knowledge_Team_Remove_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not update the team`)
};

const es_mod_knowledge_team_remove_failed = /** @type {(inputs: Mod_Knowledge_Team_Remove_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo actualizar el equipo`)
};

const de_mod_knowledge_team_remove_failed = /** @type {(inputs: Mod_Knowledge_Team_Remove_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team konnte nicht aktualisiert werden`)
};

const fr_mod_knowledge_team_remove_failed = /** @type {(inputs: Mod_Knowledge_Team_Remove_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de mettre à jour l’équipe`)
};

const it_mod_knowledge_team_remove_failed = /** @type {(inputs: Mod_Knowledge_Team_Remove_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile aggiornare il team`)
};

const nl_mod_knowledge_team_remove_failed = /** @type {(inputs: Mod_Knowledge_Team_Remove_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team bijwerken mislukt`)
};

const pl_mod_knowledge_team_remove_failed = /** @type {(inputs: Mod_Knowledge_Team_Remove_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zaktualizować zespołu`)
};

const pt_mod_knowledge_team_remove_failed = /** @type {(inputs: Mod_Knowledge_Team_Remove_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível atualizar a equipe`)
};

const ru_mod_knowledge_team_remove_failed = /** @type {(inputs: Mod_Knowledge_Team_Remove_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось обновить команду`)
};

const sv_mod_knowledge_team_remove_failed = /** @type {(inputs: Mod_Knowledge_Team_Remove_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte uppdatera teamet`)
};

const tr_mod_knowledge_team_remove_failed = /** @type {(inputs: Mod_Knowledge_Team_Remove_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekip güncellenemedi`)
};

const zh_mod_knowledge_team_remove_failed = /** @type {(inputs: Mod_Knowledge_Team_Remove_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更新团队`)
};

const ja_mod_knowledge_team_remove_failed = /** @type {(inputs: Mod_Knowledge_Team_Remove_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チームを更新できませんでした`)
};

/**
* | output |
* | --- |
* | "Could not update the team" |
*
* @param {Mod_Knowledge_Team_Remove_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_remove_failed = /** @type {((inputs?: Mod_Knowledge_Team_Remove_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_Remove_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_remove_failed(inputs)
	if (locale === "de") return de_mod_knowledge_team_remove_failed(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_remove_failed(inputs)
	if (locale === "it") return it_mod_knowledge_team_remove_failed(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_remove_failed(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_remove_failed(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_remove_failed(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_remove_failed(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_remove_failed(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_remove_failed(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_remove_failed(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_remove_failed(inputs)
	return en_mod_knowledge_team_remove_failed(inputs)
});
