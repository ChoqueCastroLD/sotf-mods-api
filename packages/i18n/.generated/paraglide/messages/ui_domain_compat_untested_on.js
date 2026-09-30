/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Ui_Domain_Compat_Untested_OnInputs */

const en_ui_domain_compat_untested_on = /** @type {(inputs: Ui_Domain_Compat_Untested_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Not verified on ${i?.build}`)
};

const es_ui_domain_compat_untested_on = /** @type {(inputs: Ui_Domain_Compat_Untested_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sin verificar en ${i?.build}`)
};

const de_ui_domain_compat_untested_on = /** @type {(inputs: Ui_Domain_Compat_Untested_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nicht bestätigt auf ${i?.build}`)
};

const fr_ui_domain_compat_untested_on = /** @type {(inputs: Ui_Domain_Compat_Untested_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Non vérifié sur ${i?.build}`)
};

const it_ui_domain_compat_untested_on = /** @type {(inputs: Ui_Domain_Compat_Untested_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Non verificato su ${i?.build}`)
};

const nl_ui_domain_compat_untested_on = /** @type {(inputs: Ui_Domain_Compat_Untested_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niet bevestigd op ${i?.build}`)
};

const pl_ui_domain_compat_untested_on = /** @type {(inputs: Ui_Domain_Compat_Untested_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niezweryfikowany na ${i?.build}`)
};

const pt_ui_domain_compat_untested_on = /** @type {(inputs: Ui_Domain_Compat_Untested_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Não verificado em ${i?.build}`)
};

const ru_ui_domain_compat_untested_on = /** @type {(inputs: Ui_Domain_Compat_Untested_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Не проверено на ${i?.build}`)
};

const sv_ui_domain_compat_untested_on = /** @type {(inputs: Ui_Domain_Compat_Untested_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inte verifierad på ${i?.build}`)
};

const tr_ui_domain_compat_untested_on = /** @type {(inputs: Ui_Domain_Compat_Untested_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} üzerinde doğrulanmadı`)
};

const zh_ui_domain_compat_untested_on = /** @type {(inputs: Ui_Domain_Compat_Untested_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`未在 ${i?.build} 上验证`)
};

const ja_ui_domain_compat_untested_on = /** @type {(inputs: Ui_Domain_Compat_Untested_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} では未確認`)
};

/**
* | output |
* | --- |
* | "Not verified on {build}" |
*
* @param {Ui_Domain_Compat_Untested_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_compat_untested_on = /** @type {((inputs: Ui_Domain_Compat_Untested_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Compat_Untested_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_compat_untested_on(inputs)
	if (locale === "de") return de_ui_domain_compat_untested_on(inputs)
	if (locale === "fr") return fr_ui_domain_compat_untested_on(inputs)
	if (locale === "it") return it_ui_domain_compat_untested_on(inputs)
	if (locale === "nl") return nl_ui_domain_compat_untested_on(inputs)
	if (locale === "pl") return pl_ui_domain_compat_untested_on(inputs)
	if (locale === "pt") return pt_ui_domain_compat_untested_on(inputs)
	if (locale === "ru") return ru_ui_domain_compat_untested_on(inputs)
	if (locale === "sv") return sv_ui_domain_compat_untested_on(inputs)
	if (locale === "tr") return tr_ui_domain_compat_untested_on(inputs)
	if (locale === "zh") return zh_ui_domain_compat_untested_on(inputs)
	if (locale === "ja") return ja_ui_domain_compat_untested_on(inputs)
	return en_ui_domain_compat_untested_on(inputs)
});
