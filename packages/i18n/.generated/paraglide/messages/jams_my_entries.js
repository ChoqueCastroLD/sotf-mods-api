/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_My_EntriesInputs */

const en_jams_my_entries = /** @type {(inputs: Jams_My_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your entries`)
};

const es_jams_my_entries = /** @type {(inputs: Jams_My_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus participaciones`)
};

const de_jams_my_entries = /** @type {(inputs: Jams_My_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Beiträge`)
};

const fr_jams_my_entries = /** @type {(inputs: Jams_My_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos participations`)
};

const it_jams_my_entries = /** @type {(inputs: Jams_My_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le tue iscrizioni`)
};

const nl_jams_my_entries = /** @type {(inputs: Jams_My_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je inzendingen`)
};

const pl_jams_my_entries = /** @type {(inputs: Jams_My_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje zgłoszenia`)
};

const pt_jams_my_entries = /** @type {(inputs: Jams_My_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suas inscrições`)
};

const ru_jams_my_entries = /** @type {(inputs: Jams_My_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши работы`)
};

const sv_jams_my_entries = /** @type {(inputs: Jams_My_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina bidrag`)
};

const tr_jams_my_entries = /** @type {(inputs: Jams_My_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvurularınız`)
};

const zh_jams_my_entries = /** @type {(inputs: Jams_My_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的作品`)
};

const ja_jams_my_entries = /** @type {(inputs: Jams_My_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの作品`)
};

/**
* | output |
* | --- |
* | "Your entries" |
*
* @param {Jams_My_EntriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_my_entries = /** @type {((inputs?: Jams_My_EntriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_My_EntriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_my_entries(inputs)
	if (locale === "de") return de_jams_my_entries(inputs)
	if (locale === "fr") return fr_jams_my_entries(inputs)
	if (locale === "it") return it_jams_my_entries(inputs)
	if (locale === "nl") return nl_jams_my_entries(inputs)
	if (locale === "pl") return pl_jams_my_entries(inputs)
	if (locale === "pt") return pt_jams_my_entries(inputs)
	if (locale === "ru") return ru_jams_my_entries(inputs)
	if (locale === "sv") return sv_jams_my_entries(inputs)
	if (locale === "tr") return tr_jams_my_entries(inputs)
	if (locale === "zh") return zh_jams_my_entries(inputs)
	if (locale === "ja") return ja_jams_my_entries(inputs)
	return en_jams_my_entries(inputs)
});
