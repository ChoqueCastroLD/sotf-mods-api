/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_ScanInputs */

const en_settings_2fa_scan = /** @type {(inputs: Settings_2fa_ScanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan this QR code with your authenticator app, or type the key by hand.`)
};

const es_settings_2fa_scan = /** @type {(inputs: Settings_2fa_ScanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escanea este código QR con tu app de autenticación o escribe la clave a mano.`)
};

const de_settings_2fa_scan = /** @type {(inputs: Settings_2fa_ScanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scanne diesen QR-Code mit deiner Authenticator-App oder gib den Schlüssel von Hand ein.`)
};

const fr_settings_2fa_scan = /** @type {(inputs: Settings_2fa_ScanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scannez ce QR code avec votre application d’authentification ou saisissez la clé à la main.`)
};

const it_settings_2fa_scan = /** @type {(inputs: Settings_2fa_ScanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scansiona questo codice QR con la tua app di autenticazione o digita la chiave a mano.`)
};

const nl_settings_2fa_scan = /** @type {(inputs: Settings_2fa_ScanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan deze QR-code met je authenticator-app of typ de sleutel handmatig in.`)
};

const pl_settings_2fa_scan = /** @type {(inputs: Settings_2fa_ScanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeskanuj ten kod QR aplikacją uwierzytelniającą lub wpisz klucz ręcznie.`)
};

const pt_settings_2fa_scan = /** @type {(inputs: Settings_2fa_ScanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escaneie este QR code com seu app autenticador ou digite a chave manualmente.`)
};

const ru_settings_2fa_scan = /** @type {(inputs: Settings_2fa_ScanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отсканируйте этот QR-код в приложении-аутентификаторе или введите ключ вручную.`)
};

const sv_settings_2fa_scan = /** @type {(inputs: Settings_2fa_ScanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skanna den här QR-koden med din autentiseringsapp eller skriv in nyckeln för hand.`)
};

const tr_settings_2fa_scan = /** @type {(inputs: Settings_2fa_ScanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu QR kodunu kimlik doğrulayıcı uygulamanla tara veya anahtarı elle yaz.`)
};

const zh_settings_2fa_scan = /** @type {(inputs: Settings_2fa_ScanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用验证器应用扫描此二维码，或手动输入密钥。`)
};

const ja_settings_2fa_scan = /** @type {(inputs: Settings_2fa_ScanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証アプリでこのQRコードをスキャンするか、キーを手入力してください。`)
};

/**
* | output |
* | --- |
* | "Scan this QR code with your authenticator app, or type the key by hand." |
*
* @param {Settings_2fa_ScanInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_scan = /** @type {((inputs?: Settings_2fa_ScanInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_ScanInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_scan(inputs)
	if (locale === "de") return de_settings_2fa_scan(inputs)
	if (locale === "fr") return fr_settings_2fa_scan(inputs)
	if (locale === "it") return it_settings_2fa_scan(inputs)
	if (locale === "nl") return nl_settings_2fa_scan(inputs)
	if (locale === "pl") return pl_settings_2fa_scan(inputs)
	if (locale === "pt") return pt_settings_2fa_scan(inputs)
	if (locale === "ru") return ru_settings_2fa_scan(inputs)
	if (locale === "sv") return sv_settings_2fa_scan(inputs)
	if (locale === "tr") return tr_settings_2fa_scan(inputs)
	if (locale === "zh") return zh_settings_2fa_scan(inputs)
	if (locale === "ja") return ja_settings_2fa_scan(inputs)
	return en_settings_2fa_scan(inputs)
});
