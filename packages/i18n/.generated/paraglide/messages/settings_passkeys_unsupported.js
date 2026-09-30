/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Passkeys_UnsupportedInputs */

const en_settings_passkeys_unsupported = /** @type {(inputs: Settings_Passkeys_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This browser does not support passkeys.`)
};

const es_settings_passkeys_unsupported = /** @type {(inputs: Settings_Passkeys_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este navegador no admite claves de acceso.`)
};

const de_settings_passkeys_unsupported = /** @type {(inputs: Settings_Passkeys_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Browser unterstützt keine Passkeys.`)
};

const fr_settings_passkeys_unsupported = /** @type {(inputs: Settings_Passkeys_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce navigateur ne prend pas en charge les clés d’accès.`)
};

const it_settings_passkeys_unsupported = /** @type {(inputs: Settings_Passkeys_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo browser non supporta le passkey.`)
};

const nl_settings_passkeys_unsupported = /** @type {(inputs: Settings_Passkeys_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze browser ondersteunt geen passkeys.`)
};

const pl_settings_passkeys_unsupported = /** @type {(inputs: Settings_Passkeys_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta przeglądarka nie obsługuje kluczy dostępu.`)
};

const pt_settings_passkeys_unsupported = /** @type {(inputs: Settings_Passkeys_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este navegador não oferece suporte a chaves de acesso.`)
};

const ru_settings_passkeys_unsupported = /** @type {(inputs: Settings_Passkeys_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот браузер не поддерживает ключи доступа.`)
};

const sv_settings_passkeys_unsupported = /** @type {(inputs: Settings_Passkeys_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här webbläsaren stöder inte passkeys.`)
};

const tr_settings_passkeys_unsupported = /** @type {(inputs: Settings_Passkeys_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu tarayıcı geçiş anahtarlarını desteklemiyor.`)
};

const zh_settings_passkeys_unsupported = /** @type {(inputs: Settings_Passkeys_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此浏览器不支持通行密钥。`)
};

const ja_settings_passkeys_unsupported = /** @type {(inputs: Settings_Passkeys_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このブラウザーはパスキーに対応していません。`)
};

/**
* | output |
* | --- |
* | "This browser does not support passkeys." |
*
* @param {Settings_Passkeys_UnsupportedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_unsupported = /** @type {((inputs?: Settings_Passkeys_UnsupportedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_UnsupportedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_unsupported(inputs)
	if (locale === "de") return de_settings_passkeys_unsupported(inputs)
	if (locale === "fr") return fr_settings_passkeys_unsupported(inputs)
	if (locale === "it") return it_settings_passkeys_unsupported(inputs)
	if (locale === "nl") return nl_settings_passkeys_unsupported(inputs)
	if (locale === "pl") return pl_settings_passkeys_unsupported(inputs)
	if (locale === "pt") return pt_settings_passkeys_unsupported(inputs)
	if (locale === "ru") return ru_settings_passkeys_unsupported(inputs)
	if (locale === "sv") return sv_settings_passkeys_unsupported(inputs)
	if (locale === "tr") return tr_settings_passkeys_unsupported(inputs)
	if (locale === "zh") return zh_settings_passkeys_unsupported(inputs)
	if (locale === "ja") return ja_settings_passkeys_unsupported(inputs)
	return en_settings_passkeys_unsupported(inputs)
});
