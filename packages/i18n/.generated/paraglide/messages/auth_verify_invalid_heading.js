/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Verify_Invalid_HeadingInputs */

const en_auth_verify_invalid_heading = /** @type {(inputs: Auth_Verify_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This link doesn’t work anymore`)
};

const es_auth_verify_invalid_heading = /** @type {(inputs: Auth_Verify_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este enlace ya no funciona`)
};

const de_auth_verify_invalid_heading = /** @type {(inputs: Auth_Verify_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Link funktioniert nicht mehr`)
};

const fr_auth_verify_invalid_heading = /** @type {(inputs: Auth_Verify_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce lien ne fonctionne plus`)
};

const it_auth_verify_invalid_heading = /** @type {(inputs: Auth_Verify_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo link non funziona più`)
};

const nl_auth_verify_invalid_heading = /** @type {(inputs: Auth_Verify_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze link werkt niet meer`)
};

const pl_auth_verify_invalid_heading = /** @type {(inputs: Auth_Verify_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten link już nie działa`)
};

const pt_auth_verify_invalid_heading = /** @type {(inputs: Auth_Verify_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este link não funciona mais`)
};

const ru_auth_verify_invalid_heading = /** @type {(inputs: Auth_Verify_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта ссылка больше не работает`)
};

const sv_auth_verify_invalid_heading = /** @type {(inputs: Auth_Verify_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länken fungerar inte längre`)
};

const tr_auth_verify_invalid_heading = /** @type {(inputs: Auth_Verify_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu bağlantı artık çalışmıyor`)
};

const zh_auth_verify_invalid_heading = /** @type {(inputs: Auth_Verify_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该链接已失效`)
};

const ja_auth_verify_invalid_heading = /** @type {(inputs: Auth_Verify_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このリンクはもう使えません`)
};

/**
* | output |
* | --- |
* | "This link doesn’t work anymore" |
*
* @param {Auth_Verify_Invalid_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_verify_invalid_heading = /** @type {((inputs?: Auth_Verify_Invalid_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Verify_Invalid_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_verify_invalid_heading(inputs)
	if (locale === "de") return de_auth_verify_invalid_heading(inputs)
	if (locale === "fr") return fr_auth_verify_invalid_heading(inputs)
	if (locale === "it") return it_auth_verify_invalid_heading(inputs)
	if (locale === "nl") return nl_auth_verify_invalid_heading(inputs)
	if (locale === "pl") return pl_auth_verify_invalid_heading(inputs)
	if (locale === "pt") return pt_auth_verify_invalid_heading(inputs)
	if (locale === "ru") return ru_auth_verify_invalid_heading(inputs)
	if (locale === "sv") return sv_auth_verify_invalid_heading(inputs)
	if (locale === "tr") return tr_auth_verify_invalid_heading(inputs)
	if (locale === "zh") return zh_auth_verify_invalid_heading(inputs)
	if (locale === "ja") return ja_auth_verify_invalid_heading(inputs)
	return en_auth_verify_invalid_heading(inputs)
});
