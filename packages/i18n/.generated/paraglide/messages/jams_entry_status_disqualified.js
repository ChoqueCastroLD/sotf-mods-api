/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entry_Status_DisqualifiedInputs */

const en_jams_entry_status_disqualified = /** @type {(inputs: Jams_Entry_Status_DisqualifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disqualified`)
};

const es_jams_entry_status_disqualified = /** @type {(inputs: Jams_Entry_Status_DisqualifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descalificada`)
};

const de_jams_entry_status_disqualified = /** @type {(inputs: Jams_Entry_Status_DisqualifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disqualifiziert`)
};

const fr_jams_entry_status_disqualified = /** @type {(inputs: Jams_Entry_Status_DisqualifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disqualifiée`)
};

const it_jams_entry_status_disqualified = /** @type {(inputs: Jams_Entry_Status_DisqualifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Squalificata`)
};

const nl_jams_entry_status_disqualified = /** @type {(inputs: Jams_Entry_Status_DisqualifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gediskwalificeerd`)
};

const pl_jams_entry_status_disqualified = /** @type {(inputs: Jams_Entry_Status_DisqualifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zdyskwalifikowane`)
};

const pt_jams_entry_status_disqualified = /** @type {(inputs: Jams_Entry_Status_DisqualifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desqualificada`)
};

const ru_jams_entry_status_disqualified = /** @type {(inputs: Jams_Entry_Status_DisqualifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дисквалифицирована`)
};

const sv_jams_entry_status_disqualified = /** @type {(inputs: Jams_Entry_Status_DisqualifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diskvalificerat`)
};

const tr_jams_entry_status_disqualified = /** @type {(inputs: Jams_Entry_Status_DisqualifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diskalifiye`)
};

const zh_jams_entry_status_disqualified = /** @type {(inputs: Jams_Entry_Status_DisqualifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消资格`)
};

const ja_jams_entry_status_disqualified = /** @type {(inputs: Jams_Entry_Status_DisqualifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失格`)
};

/**
* | output |
* | --- |
* | "Disqualified" |
*
* @param {Jams_Entry_Status_DisqualifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entry_status_disqualified = /** @type {((inputs?: Jams_Entry_Status_DisqualifiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entry_Status_DisqualifiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entry_status_disqualified(inputs)
	if (locale === "de") return de_jams_entry_status_disqualified(inputs)
	if (locale === "fr") return fr_jams_entry_status_disqualified(inputs)
	if (locale === "it") return it_jams_entry_status_disqualified(inputs)
	if (locale === "nl") return nl_jams_entry_status_disqualified(inputs)
	if (locale === "pl") return pl_jams_entry_status_disqualified(inputs)
	if (locale === "pt") return pt_jams_entry_status_disqualified(inputs)
	if (locale === "ru") return ru_jams_entry_status_disqualified(inputs)
	if (locale === "sv") return sv_jams_entry_status_disqualified(inputs)
	if (locale === "tr") return tr_jams_entry_status_disqualified(inputs)
	if (locale === "zh") return zh_jams_entry_status_disqualified(inputs)
	if (locale === "ja") return ja_jams_entry_status_disqualified(inputs)
	return en_jams_entry_status_disqualified(inputs)
});
