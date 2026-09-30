/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_License_Reupload_With_CreditInputs */

const en_mod_license_reupload_with_credit = /** @type {(inputs: Mod_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Re-upload with credit`)
};

const es_mod_license_reupload_with_credit = /** @type {(inputs: Mod_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resubir citando al autor`)
};

const de_mod_license_reupload_with_credit = /** @type {(inputs: Mod_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neu hochladen mit Namensnennung`)
};

const fr_mod_license_reupload_with_credit = /** @type {(inputs: Mod_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Republication avec crédit`)
};

const it_mod_license_reupload_with_credit = /** @type {(inputs: Mod_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricaricamento con credito`)
};

const nl_mod_license_reupload_with_credit = /** @type {(inputs: Mod_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw uploaden met naamsvermelding`)
};

const pl_mod_license_reupload_with_credit = /** @type {(inputs: Mod_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponowne udostępnienie z podaniem autora`)
};

const pt_mod_license_reupload_with_credit = /** @type {(inputs: Mod_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reenvio com crédito`)
};

const ru_mod_license_reupload_with_credit = /** @type {(inputs: Mod_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перезалив с указанием автора`)
};

const sv_mod_license_reupload_with_credit = /** @type {(inputs: Mod_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återpublicering med erkännande`)
};

const tr_mod_license_reupload_with_credit = /** @type {(inputs: Mod_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak göstererek yeniden yükleme`)
};

const zh_mod_license_reupload_with_credit = /** @type {(inputs: Mod_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注明作者后可转载`)
};

const ja_mod_license_reupload_with_credit = /** @type {(inputs: Mod_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クレジット表記で再配布可`)
};

/**
* | output |
* | --- |
* | "Re-upload with credit" |
*
* @param {Mod_License_Reupload_With_CreditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_license_reupload_with_credit = /** @type {((inputs?: Mod_License_Reupload_With_CreditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_License_Reupload_With_CreditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_license_reupload_with_credit(inputs)
	if (locale === "de") return de_mod_license_reupload_with_credit(inputs)
	if (locale === "fr") return fr_mod_license_reupload_with_credit(inputs)
	if (locale === "it") return it_mod_license_reupload_with_credit(inputs)
	if (locale === "nl") return nl_mod_license_reupload_with_credit(inputs)
	if (locale === "pl") return pl_mod_license_reupload_with_credit(inputs)
	if (locale === "pt") return pt_mod_license_reupload_with_credit(inputs)
	if (locale === "ru") return ru_mod_license_reupload_with_credit(inputs)
	if (locale === "sv") return sv_mod_license_reupload_with_credit(inputs)
	if (locale === "tr") return tr_mod_license_reupload_with_credit(inputs)
	if (locale === "zh") return zh_mod_license_reupload_with_credit(inputs)
	if (locale === "ja") return ja_mod_license_reupload_with_credit(inputs)
	return en_mod_license_reupload_with_credit(inputs)
});
