/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_DisqualifyInputs */

const en_jams_entries_disqualify = /** @type {(inputs: Jams_Entries_DisqualifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disqualify`)
};

const es_jams_entries_disqualify = /** @type {(inputs: Jams_Entries_DisqualifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descalificar`)
};

const de_jams_entries_disqualify = /** @type {(inputs: Jams_Entries_DisqualifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disqualifizieren`)
};

const fr_jams_entries_disqualify = /** @type {(inputs: Jams_Entries_DisqualifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disqualifier`)
};

const it_jams_entries_disqualify = /** @type {(inputs: Jams_Entries_DisqualifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Squalifica`)
};

const nl_jams_entries_disqualify = /** @type {(inputs: Jams_Entries_DisqualifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diskwalificeren`)
};

const pl_jams_entries_disqualify = /** @type {(inputs: Jams_Entries_DisqualifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zdyskwalifikuj`)
};

const pt_jams_entries_disqualify = /** @type {(inputs: Jams_Entries_DisqualifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desqualificar`)
};

const ru_jams_entries_disqualify = /** @type {(inputs: Jams_Entries_DisqualifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дисквалифицировать`)
};

const sv_jams_entries_disqualify = /** @type {(inputs: Jams_Entries_DisqualifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diskvalificera`)
};

const tr_jams_entries_disqualify = /** @type {(inputs: Jams_Entries_DisqualifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diskalifiye et`)
};

const zh_jams_entries_disqualify = /** @type {(inputs: Jams_Entries_DisqualifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消资格`)
};

const ja_jams_entries_disqualify = /** @type {(inputs: Jams_Entries_DisqualifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失格にする`)
};

/**
* | output |
* | --- |
* | "Disqualify" |
*
* @param {Jams_Entries_DisqualifyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_disqualify = /** @type {((inputs?: Jams_Entries_DisqualifyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_DisqualifyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_disqualify(inputs)
	if (locale === "de") return de_jams_entries_disqualify(inputs)
	if (locale === "fr") return fr_jams_entries_disqualify(inputs)
	if (locale === "it") return it_jams_entries_disqualify(inputs)
	if (locale === "nl") return nl_jams_entries_disqualify(inputs)
	if (locale === "pl") return pl_jams_entries_disqualify(inputs)
	if (locale === "pt") return pt_jams_entries_disqualify(inputs)
	if (locale === "ru") return ru_jams_entries_disqualify(inputs)
	if (locale === "sv") return sv_jams_entries_disqualify(inputs)
	if (locale === "tr") return tr_jams_entries_disqualify(inputs)
	if (locale === "zh") return zh_jams_entries_disqualify(inputs)
	if (locale === "ja") return ja_jams_entries_disqualify(inputs)
	return en_jams_entries_disqualify(inputs)
});
