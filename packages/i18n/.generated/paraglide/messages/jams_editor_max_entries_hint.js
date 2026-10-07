/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Max_Entries_HintInputs */

const en_jams_editor_max_entries_hint = /** @type {(inputs: Jams_Editor_Max_Entries_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How many entries one person can submit.`)
};

const es_jams_editor_max_entries_hint = /** @type {(inputs: Jams_Editor_Max_Entries_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuántas participaciones puede enviar una persona.`)
};

const de_jams_editor_max_entries_hint = /** @type {(inputs: Jams_Editor_Max_Entries_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie viele Beiträge eine Person einreichen darf.`)
};

const fr_jams_editor_max_entries_hint = /** @type {(inputs: Jams_Editor_Max_Entries_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Combien de participations une personne peut envoyer.`)
};

const it_jams_editor_max_entries_hint = /** @type {(inputs: Jams_Editor_Max_Entries_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quante partecipazioni può inviare una persona.`)
};

const nl_jams_editor_max_entries_hint = /** @type {(inputs: Jams_Editor_Max_Entries_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoeveel inzendingen één persoon mag indienen.`)
};

const pl_jams_editor_max_entries_hint = /** @type {(inputs: Jams_Editor_Max_Entries_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ile zgłoszeń może wysłać jedna osoba.`)
};

const pt_jams_editor_max_entries_hint = /** @type {(inputs: Jams_Editor_Max_Entries_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quantas inscrições uma pessoa pode enviar.`)
};

const ru_jams_editor_max_entries_hint = /** @type {(inputs: Jams_Editor_Max_Entries_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сколько работ может подать один человек.`)
};

const sv_jams_editor_max_entries_hint = /** @type {(inputs: Jams_Editor_Max_Entries_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hur många bidrag en person får skicka in.`)
};

const tr_jams_editor_max_entries_hint = /** @type {(inputs: Jams_Editor_Max_Entries_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir kişinin gönderebileceği katılım sayısı.`)
};

const zh_jams_editor_max_entries_hint = /** @type {(inputs: Jams_Editor_Max_Entries_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每人最多可提交的作品数。`)
};

const ja_jams_editor_max_entries_hint = /** @type {(inputs: Jams_Editor_Max_Entries_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 人が提出できる作品数です。`)
};

/**
* | output |
* | --- |
* | "How many entries one person can submit." |
*
* @param {Jams_Editor_Max_Entries_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_max_entries_hint = /** @type {((inputs?: Jams_Editor_Max_Entries_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Max_Entries_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_max_entries_hint(inputs)
	if (locale === "de") return de_jams_editor_max_entries_hint(inputs)
	if (locale === "fr") return fr_jams_editor_max_entries_hint(inputs)
	if (locale === "it") return it_jams_editor_max_entries_hint(inputs)
	if (locale === "nl") return nl_jams_editor_max_entries_hint(inputs)
	if (locale === "pl") return pl_jams_editor_max_entries_hint(inputs)
	if (locale === "pt") return pt_jams_editor_max_entries_hint(inputs)
	if (locale === "ru") return ru_jams_editor_max_entries_hint(inputs)
	if (locale === "sv") return sv_jams_editor_max_entries_hint(inputs)
	if (locale === "tr") return tr_jams_editor_max_entries_hint(inputs)
	if (locale === "zh") return zh_jams_editor_max_entries_hint(inputs)
	if (locale === "ja") return ja_jams_editor_max_entries_hint(inputs)
	return en_jams_editor_max_entries_hint(inputs)
});
