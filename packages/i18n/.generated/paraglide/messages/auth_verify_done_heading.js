/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Verify_Done_HeadingInputs */

const en_auth_verify_done_heading = /** @type {(inputs: Auth_Verify_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email verified`)
};

const es_auth_verify_done_heading = /** @type {(inputs: Auth_Verify_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email verificado`)
};

const de_auth_verify_done_heading = /** @type {(inputs: Auth_Verify_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-Mail bestätigt`)
};

const fr_auth_verify_done_heading = /** @type {(inputs: Auth_Verify_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail vérifié`)
};

const it_auth_verify_done_heading = /** @type {(inputs: Auth_Verify_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email verificata`)
};

const nl_auth_verify_done_heading = /** @type {(inputs: Auth_Verify_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mailadres bevestigd`)
};

const pl_auth_verify_done_heading = /** @type {(inputs: Auth_Verify_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail potwierdzony`)
};

const pt_auth_verify_done_heading = /** @type {(inputs: Auth_Verify_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-mail confirmado`)
};

const ru_auth_verify_done_heading = /** @type {(inputs: Auth_Verify_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email подтверждён`)
};

const sv_auth_verify_done_heading = /** @type {(inputs: Auth_Verify_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posten är bekräftad`)
};

const tr_auth_verify_done_heading = /** @type {(inputs: Auth_Verify_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-posta doğrulandı`)
};

const zh_auth_verify_done_heading = /** @type {(inputs: Auth_Verify_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮箱已验证`)
};

const ja_auth_verify_done_heading = /** @type {(inputs: Auth_Verify_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メールアドレスを確認しました`)
};

/**
* | output |
* | --- |
* | "Email verified" |
*
* @param {Auth_Verify_Done_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_verify_done_heading = /** @type {((inputs?: Auth_Verify_Done_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Verify_Done_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_verify_done_heading(inputs)
	if (locale === "de") return de_auth_verify_done_heading(inputs)
	if (locale === "fr") return fr_auth_verify_done_heading(inputs)
	if (locale === "it") return it_auth_verify_done_heading(inputs)
	if (locale === "nl") return nl_auth_verify_done_heading(inputs)
	if (locale === "pl") return pl_auth_verify_done_heading(inputs)
	if (locale === "pt") return pt_auth_verify_done_heading(inputs)
	if (locale === "ru") return ru_auth_verify_done_heading(inputs)
	if (locale === "sv") return sv_auth_verify_done_heading(inputs)
	if (locale === "tr") return tr_auth_verify_done_heading(inputs)
	if (locale === "zh") return zh_auth_verify_done_heading(inputs)
	if (locale === "ja") return ja_auth_verify_done_heading(inputs)
	return en_auth_verify_done_heading(inputs)
});
