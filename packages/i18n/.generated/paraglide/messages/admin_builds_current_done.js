/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Admin_Builds_Current_DoneInputs */

const en_admin_builds_current_done = /** @type {(inputs: Admin_Builds_Current_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} is now the current build`)
};

const es_admin_builds_current_done = /** @type {(inputs: Admin_Builds_Current_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} es ahora la build actual`)
};

const de_admin_builds_current_done = /** @type {(inputs: Admin_Builds_Current_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} ist jetzt der aktuelle Build`)
};

const fr_admin_builds_current_done = /** @type {(inputs: Admin_Builds_Current_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} est désormais le build actuel`)
};

const it_admin_builds_current_done = /** @type {(inputs: Admin_Builds_Current_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} è ora la build attuale`)
};

const nl_admin_builds_current_done = /** @type {(inputs: Admin_Builds_Current_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} is nu de huidige build`)
};

const pl_admin_builds_current_done = /** @type {(inputs: Admin_Builds_Current_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} jest teraz aktualnym buildem`)
};

const pt_admin_builds_current_done = /** @type {(inputs: Admin_Builds_Current_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} agora é o build atual`)
};

const ru_admin_builds_current_done = /** @type {(inputs: Admin_Builds_Current_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} теперь текущая сборка`)
};

const sv_admin_builds_current_done = /** @type {(inputs: Admin_Builds_Current_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} är nu det aktuella bygget`)
};

const tr_admin_builds_current_done = /** @type {(inputs: Admin_Builds_Current_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} artık güncel sürüm`)
};

const zh_admin_builds_current_done = /** @type {(inputs: Admin_Builds_Current_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} 现在是当前版本`)
};

const ja_admin_builds_current_done = /** @type {(inputs: Admin_Builds_Current_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} が現在のビルドになりました`)
};

/**
* | output |
* | --- |
* | "{label} is now the current build" |
*
* @param {Admin_Builds_Current_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_current_done = /** @type {((inputs: Admin_Builds_Current_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Current_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_current_done(inputs)
	if (locale === "de") return de_admin_builds_current_done(inputs)
	if (locale === "fr") return fr_admin_builds_current_done(inputs)
	if (locale === "it") return it_admin_builds_current_done(inputs)
	if (locale === "nl") return nl_admin_builds_current_done(inputs)
	if (locale === "pl") return pl_admin_builds_current_done(inputs)
	if (locale === "pt") return pt_admin_builds_current_done(inputs)
	if (locale === "ru") return ru_admin_builds_current_done(inputs)
	if (locale === "sv") return sv_admin_builds_current_done(inputs)
	if (locale === "tr") return tr_admin_builds_current_done(inputs)
	if (locale === "zh") return zh_admin_builds_current_done(inputs)
	if (locale === "ja") return ja_admin_builds_current_done(inputs)
	return en_admin_builds_current_done(inputs)
});
