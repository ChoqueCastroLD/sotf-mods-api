/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Successor_EmptyInputs */

const en_basecamp_settings_successor_empty = /** @type {(inputs: Basecamp_Settings_Successor_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No other published mod`)
};

const es_basecamp_settings_successor_empty = /** @type {(inputs: Basecamp_Settings_Successor_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay otro mod publicado`)
};

const de_basecamp_settings_successor_empty = /** @type {(inputs: Basecamp_Settings_Successor_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein anderer veröffentlichter Mod`)
};

const fr_basecamp_settings_successor_empty = /** @type {(inputs: Basecamp_Settings_Successor_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun autre mod publié`)
};

const it_basecamp_settings_successor_empty = /** @type {(inputs: Basecamp_Settings_Successor_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun’altra mod pubblicata`)
};

const nl_basecamp_settings_successor_empty = /** @type {(inputs: Basecamp_Settings_Successor_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen andere gepubliceerde mod`)
};

const pl_basecamp_settings_successor_empty = /** @type {(inputs: Basecamp_Settings_Successor_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak innego opublikowanego moda`)
};

const pt_basecamp_settings_successor_empty = /** @type {(inputs: Basecamp_Settings_Successor_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum outro mod publicado`)
};

const ru_basecamp_settings_successor_empty = /** @type {(inputs: Basecamp_Settings_Successor_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Других опубликованных модов нет`)
};

const sv_basecamp_settings_successor_empty = /** @type {(inputs: Basecamp_Settings_Successor_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen annan publicerad mod`)
};

const tr_basecamp_settings_successor_empty = /** @type {(inputs: Basecamp_Settings_Successor_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınlanmış başka mod yok`)
};

const zh_basecamp_settings_successor_empty = /** @type {(inputs: Basecamp_Settings_Successor_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有其他已发布的模组`)
};

const ja_basecamp_settings_successor_empty = /** @type {(inputs: Basecamp_Settings_Successor_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかに公開中の MOD はありません`)
};

/**
* | output |
* | --- |
* | "No other published mod" |
*
* @param {Basecamp_Settings_Successor_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_successor_empty = /** @type {((inputs?: Basecamp_Settings_Successor_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Successor_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_successor_empty(inputs)
	if (locale === "de") return de_basecamp_settings_successor_empty(inputs)
	if (locale === "fr") return fr_basecamp_settings_successor_empty(inputs)
	if (locale === "it") return it_basecamp_settings_successor_empty(inputs)
	if (locale === "nl") return nl_basecamp_settings_successor_empty(inputs)
	if (locale === "pl") return pl_basecamp_settings_successor_empty(inputs)
	if (locale === "pt") return pt_basecamp_settings_successor_empty(inputs)
	if (locale === "ru") return ru_basecamp_settings_successor_empty(inputs)
	if (locale === "sv") return sv_basecamp_settings_successor_empty(inputs)
	if (locale === "tr") return tr_basecamp_settings_successor_empty(inputs)
	if (locale === "zh") return zh_basecamp_settings_successor_empty(inputs)
	if (locale === "ja") return ja_basecamp_settings_successor_empty(inputs)
	return en_basecamp_settings_successor_empty(inputs)
});
