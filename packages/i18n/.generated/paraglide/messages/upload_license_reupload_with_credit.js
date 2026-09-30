/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_License_Reupload_With_CreditInputs */

const en_upload_license_reupload_with_credit = /** @type {(inputs: Upload_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Re-upload allowed with credit`)
};

const es_upload_license_reupload_with_credit = /** @type {(inputs: Upload_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se permite resubir citando al autor`)
};

const de_upload_license_reupload_with_credit = /** @type {(inputs: Upload_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneutes Hochladen mit Nennung erlaubt`)
};

const fr_upload_license_reupload_with_credit = /** @type {(inputs: Upload_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Republication autorisée avec crédit`)
};

const it_upload_license_reupload_with_credit = /** @type {(inputs: Upload_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricaricamento consentito citando l’autore`)
};

const nl_upload_license_reupload_with_credit = /** @type {(inputs: Upload_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw uploaden mag met naamsvermelding`)
};

const pl_upload_license_reupload_with_credit = /** @type {(inputs: Upload_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponowne udostępnianie z podaniem autora`)
};

const pt_upload_license_reupload_with_credit = /** @type {(inputs: Upload_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reenvio permitido com crédito`)
};

const ru_upload_license_reupload_with_credit = /** @type {(inputs: Upload_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перезалив разрешён с указанием автора`)
};

const sv_upload_license_reupload_with_credit = /** @type {(inputs: Upload_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återuppladdning tillåten med erkännande`)
};

const tr_upload_license_reupload_with_credit = /** @type {(inputs: Upload_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak göstererek yeniden yüklemeye izin var`)
};

const zh_upload_license_reupload_with_credit = /** @type {(inputs: Upload_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注明出处可转载`)
};

const ja_upload_license_reupload_with_credit = /** @type {(inputs: Upload_License_Reupload_With_CreditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クレジット表記で再配布可`)
};

/**
* | output |
* | --- |
* | "Re-upload allowed with credit" |
*
* @param {Upload_License_Reupload_With_CreditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_license_reupload_with_credit = /** @type {((inputs?: Upload_License_Reupload_With_CreditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_License_Reupload_With_CreditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_license_reupload_with_credit(inputs)
	if (locale === "de") return de_upload_license_reupload_with_credit(inputs)
	if (locale === "fr") return fr_upload_license_reupload_with_credit(inputs)
	if (locale === "it") return it_upload_license_reupload_with_credit(inputs)
	if (locale === "nl") return nl_upload_license_reupload_with_credit(inputs)
	if (locale === "pl") return pl_upload_license_reupload_with_credit(inputs)
	if (locale === "pt") return pt_upload_license_reupload_with_credit(inputs)
	if (locale === "ru") return ru_upload_license_reupload_with_credit(inputs)
	if (locale === "sv") return sv_upload_license_reupload_with_credit(inputs)
	if (locale === "tr") return tr_upload_license_reupload_with_credit(inputs)
	if (locale === "zh") return zh_upload_license_reupload_with_credit(inputs)
	if (locale === "ja") return ja_upload_license_reupload_with_credit(inputs)
	return en_upload_license_reupload_with_credit(inputs)
});
