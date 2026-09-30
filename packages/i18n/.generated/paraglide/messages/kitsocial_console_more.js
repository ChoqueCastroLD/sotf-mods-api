/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kitsocial_Console_MoreInputs */

const en_kitsocial_console_more = /** @type {(inputs: Kitsocial_Console_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actions for ${i?.name}`)
};

const es_kitsocial_console_more = /** @type {(inputs: Kitsocial_Console_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Acciones para ${i?.name}`)
};

const de_kitsocial_console_more = /** @type {(inputs: Kitsocial_Console_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktionen für ${i?.name}`)
};

const fr_kitsocial_console_more = /** @type {(inputs: Kitsocial_Console_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actions pour ${i?.name}`)
};

const it_kitsocial_console_more = /** @type {(inputs: Kitsocial_Console_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Azioni per ${i?.name}`)
};

const nl_kitsocial_console_more = /** @type {(inputs: Kitsocial_Console_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Acties voor ${i?.name}`)
};

const pl_kitsocial_console_more = /** @type {(inputs: Kitsocial_Console_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Akcje dla ${i?.name}`)
};

const pt_kitsocial_console_more = /** @type {(inputs: Kitsocial_Console_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ações para ${i?.name}`)
};

const ru_kitsocial_console_more = /** @type {(inputs: Kitsocial_Console_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Действия для «${i?.name}»`)
};

const sv_kitsocial_console_more = /** @type {(inputs: Kitsocial_Console_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Åtgärder för ${i?.name}`)
};

const tr_kitsocial_console_more = /** @type {(inputs: Kitsocial_Console_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için eylemler`)
};

const zh_kitsocial_console_more = /** @type {(inputs: Kitsocial_Console_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的操作`)
};

const ja_kitsocial_console_more = /** @type {(inputs: Kitsocial_Console_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の操作`)
};

/**
* | output |
* | --- |
* | "Actions for {name}" |
*
* @param {Kitsocial_Console_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_console_more = /** @type {((inputs: Kitsocial_Console_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_console_more(inputs)
	if (locale === "de") return de_kitsocial_console_more(inputs)
	if (locale === "fr") return fr_kitsocial_console_more(inputs)
	if (locale === "it") return it_kitsocial_console_more(inputs)
	if (locale === "nl") return nl_kitsocial_console_more(inputs)
	if (locale === "pl") return pl_kitsocial_console_more(inputs)
	if (locale === "pt") return pt_kitsocial_console_more(inputs)
	if (locale === "ru") return ru_kitsocial_console_more(inputs)
	if (locale === "sv") return sv_kitsocial_console_more(inputs)
	if (locale === "tr") return tr_kitsocial_console_more(inputs)
	if (locale === "zh") return zh_kitsocial_console_more(inputs)
	if (locale === "ja") return ja_kitsocial_console_more(inputs)
	return en_kitsocial_console_more(inputs)
});
