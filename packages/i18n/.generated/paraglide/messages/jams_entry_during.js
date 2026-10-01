/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entry_DuringInputs */

const en_jams_entry_during = /** @type {(inputs: Jams_Entry_DuringInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Made during the jam`)
};

const es_jams_entry_during = /** @type {(inputs: Jams_Entry_DuringInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hecho durante el jam`)
};

const de_jams_entry_during = /** @type {(inputs: Jams_Entry_DuringInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Während des Jams entstanden`)
};

const fr_jams_entry_during = /** @type {(inputs: Jams_Entry_DuringInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créé pendant le jam`)
};

const it_jams_entry_during = /** @type {(inputs: Jams_Entry_DuringInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creato durante il jam`)
};

const nl_jams_entry_during = /** @type {(inputs: Jams_Entry_DuringInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemaakt tijdens de jam`)
};

const pl_jams_entry_during = /** @type {(inputs: Jams_Entry_DuringInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powstało podczas jamu`)
};

const pt_jams_entry_during = /** @type {(inputs: Jams_Entry_DuringInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feito durante o jam`)
};

const ru_jams_entry_during = /** @type {(inputs: Jams_Entry_DuringInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создано во время джема`)
};

const sv_jams_entry_during = /** @type {(inputs: Jams_Entry_DuringInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapad under jammen`)
};

const tr_jams_entry_during = /** @type {(inputs: Jams_Entry_DuringInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam sırasında yapıldı`)
};

const zh_jams_entry_during = /** @type {(inputs: Jams_Entry_DuringInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam 期间制作`)
};

const ja_jams_entry_during = /** @type {(inputs: Jams_Entry_DuringInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャム期間中に制作`)
};

/**
* | output |
* | --- |
* | "Made during the jam" |
*
* @param {Jams_Entry_DuringInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entry_during = /** @type {((inputs?: Jams_Entry_DuringInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entry_DuringInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entry_during(inputs)
	if (locale === "de") return de_jams_entry_during(inputs)
	if (locale === "fr") return fr_jams_entry_during(inputs)
	if (locale === "it") return it_jams_entry_during(inputs)
	if (locale === "nl") return nl_jams_entry_during(inputs)
	if (locale === "pl") return pl_jams_entry_during(inputs)
	if (locale === "pt") return pt_jams_entry_during(inputs)
	if (locale === "ru") return ru_jams_entry_during(inputs)
	if (locale === "sv") return sv_jams_entry_during(inputs)
	if (locale === "tr") return tr_jams_entry_during(inputs)
	if (locale === "zh") return zh_jams_entry_during(inputs)
	if (locale === "ja") return ja_jams_entry_during(inputs)
	return en_jams_entry_during(inputs)
});
