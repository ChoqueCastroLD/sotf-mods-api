/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Action_Open_SubmissionsInputs */

const en_jams_editor_action_open_submissions = /** @type {(inputs: Jams_Editor_Action_Open_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open submissions now`)
};

const es_jams_editor_action_open_submissions = /** @type {(inputs: Jams_Editor_Action_Open_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir las inscripciones ahora`)
};

const de_jams_editor_action_open_submissions = /** @type {(inputs: Jams_Editor_Action_Open_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einreichungen jetzt öffnen`)
};

const fr_jams_editor_action_open_submissions = /** @type {(inputs: Jams_Editor_Action_Open_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir les inscriptions maintenant`)
};

const it_jams_editor_action_open_submissions = /** @type {(inputs: Jams_Editor_Action_Open_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri subito le iscrizioni`)
};

const nl_jams_editor_action_open_submissions = /** @type {(inputs: Jams_Editor_Action_Open_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen nu openen`)
};

const pl_jams_editor_action_open_submissions = /** @type {(inputs: Jams_Editor_Action_Open_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz zgłoszenia teraz`)
};

const pt_jams_editor_action_open_submissions = /** @type {(inputs: Jams_Editor_Action_Open_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir as inscrições agora`)
};

const ru_jams_editor_action_open_submissions = /** @type {(inputs: Jams_Editor_Action_Open_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть приём работ сейчас`)
};

const sv_jams_editor_action_open_submissions = /** @type {(inputs: Jams_Editor_Action_Open_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna bidrag nu`)
};

const tr_jams_editor_action_open_submissions = /** @type {(inputs: Jams_Editor_Action_Open_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gönderimleri şimdi aç`)
};

const zh_jams_editor_action_open_submissions = /** @type {(inputs: Jams_Editor_Action_Open_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`立即开放投稿`)
};

const ja_jams_editor_action_open_submissions = /** @type {(inputs: Jams_Editor_Action_Open_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今すぐ応募を開始する`)
};

/**
* | output |
* | --- |
* | "Open submissions now" |
*
* @param {Jams_Editor_Action_Open_SubmissionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_action_open_submissions = /** @type {((inputs?: Jams_Editor_Action_Open_SubmissionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Action_Open_SubmissionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_action_open_submissions(inputs)
	if (locale === "de") return de_jams_editor_action_open_submissions(inputs)
	if (locale === "fr") return fr_jams_editor_action_open_submissions(inputs)
	if (locale === "it") return it_jams_editor_action_open_submissions(inputs)
	if (locale === "nl") return nl_jams_editor_action_open_submissions(inputs)
	if (locale === "pl") return pl_jams_editor_action_open_submissions(inputs)
	if (locale === "pt") return pt_jams_editor_action_open_submissions(inputs)
	if (locale === "ru") return ru_jams_editor_action_open_submissions(inputs)
	if (locale === "sv") return sv_jams_editor_action_open_submissions(inputs)
	if (locale === "tr") return tr_jams_editor_action_open_submissions(inputs)
	if (locale === "zh") return zh_jams_editor_action_open_submissions(inputs)
	if (locale === "ja") return ja_jams_editor_action_open_submissions(inputs)
	return en_jams_editor_action_open_submissions(inputs)
});
