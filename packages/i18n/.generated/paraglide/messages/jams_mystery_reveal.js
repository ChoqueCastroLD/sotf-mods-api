/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Jams_Mystery_RevealInputs */

const en_jams_mystery_reveal = /** @type {(inputs: Jams_Mystery_RevealInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Revealed ${i?.date}`)
};

const es_jams_mystery_reveal = /** @type {(inputs: Jams_Mystery_RevealInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se revela el ${i?.date}`)
};

const de_jams_mystery_reveal = /** @type {(inputs: Jams_Mystery_RevealInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wird am ${i?.date} enthüllt`)
};

const fr_jams_mystery_reveal = /** @type {(inputs: Jams_Mystery_RevealInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dévoilé le ${i?.date}`)
};

const it_jams_mystery_reveal = /** @type {(inputs: Jams_Mystery_RevealInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verrà svelato il ${i?.date}`)
};

const nl_jams_mystery_reveal = /** @type {(inputs: Jams_Mystery_RevealInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Onthuld op ${i?.date}`)
};

const pl_jams_mystery_reveal = /** @type {(inputs: Jams_Mystery_RevealInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odsłonięcie: ${i?.date}`)
};

const pt_jams_mystery_reveal = /** @type {(inputs: Jams_Mystery_RevealInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Revelado em ${i?.date}`)
};

const ru_jams_mystery_reveal = /** @type {(inputs: Jams_Mystery_RevealInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Откроется ${i?.date}`)
};

const sv_jams_mystery_reveal = /** @type {(inputs: Jams_Mystery_RevealInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avslöjas ${i?.date}`)
};

const tr_jams_mystery_reveal = /** @type {(inputs: Jams_Mystery_RevealInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinde açıklanır`)
};

const zh_jams_mystery_reveal = /** @type {(inputs: Jams_Mystery_RevealInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} 揭晓`)
};

const ja_jams_mystery_reveal = /** @type {(inputs: Jams_Mystery_RevealInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} に公開`)
};

/**
* | output |
* | --- |
* | "Revealed {date}" |
*
* @param {Jams_Mystery_RevealInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_mystery_reveal = /** @type {((inputs: Jams_Mystery_RevealInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mystery_RevealInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_mystery_reveal(inputs)
	if (locale === "de") return de_jams_mystery_reveal(inputs)
	if (locale === "fr") return fr_jams_mystery_reveal(inputs)
	if (locale === "it") return it_jams_mystery_reveal(inputs)
	if (locale === "nl") return nl_jams_mystery_reveal(inputs)
	if (locale === "pl") return pl_jams_mystery_reveal(inputs)
	if (locale === "pt") return pt_jams_mystery_reveal(inputs)
	if (locale === "ru") return ru_jams_mystery_reveal(inputs)
	if (locale === "sv") return sv_jams_mystery_reveal(inputs)
	if (locale === "tr") return tr_jams_mystery_reveal(inputs)
	if (locale === "zh") return zh_jams_mystery_reveal(inputs)
	if (locale === "ja") return ja_jams_mystery_reveal(inputs)
	return en_jams_mystery_reveal(inputs)
});
