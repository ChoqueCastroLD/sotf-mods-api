/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Codes_TextInputs */

const en_settings_2fa_codes_text = /** @type {(inputs: Settings_2fa_Codes_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Each code works once if you lose your authenticator app. They are shown only now.`)
};

const es_settings_2fa_codes_text = /** @type {(inputs: Settings_2fa_Codes_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada código sirve una sola vez si pierdes tu app de autenticación. Solo se muestran ahora.`)
};

const de_settings_2fa_codes_text = /** @type {(inputs: Settings_2fa_Codes_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Code funktioniert einmal, falls du deine Authenticator-App verlierst. Sie werden nur jetzt angezeigt.`)
};

const fr_settings_2fa_codes_text = /** @type {(inputs: Settings_2fa_Codes_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque code ne fonctionne qu’une fois si vous perdez votre application d’authentification. Ils ne sont affichés que maintenant.`)
};

const it_settings_2fa_codes_text = /** @type {(inputs: Settings_2fa_Codes_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni codice funziona una sola volta se perdi la tua app di autenticazione. Vengono mostrati solo adesso.`)
};

const nl_settings_2fa_codes_text = /** @type {(inputs: Settings_2fa_Codes_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke code werkt één keer als je je authenticator-app kwijtraakt. Ze worden alleen nu getoond.`)
};

const pl_settings_2fa_codes_text = /** @type {(inputs: Settings_2fa_Codes_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każdy kod działa raz, jeśli stracisz aplikację uwierzytelniającą. Pokazujemy je tylko teraz.`)
};

const pt_settings_2fa_codes_text = /** @type {(inputs: Settings_2fa_Codes_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada código funciona uma vez se você perder seu app autenticador. Eles aparecem só agora.`)
};

const ru_settings_2fa_codes_text = /** @type {(inputs: Settings_2fa_Codes_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Каждый код действует один раз, если вы потеряете приложение-аутентификатор. Они показываются только сейчас.`)
};

const sv_settings_2fa_codes_text = /** @type {(inputs: Settings_2fa_Codes_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje kod fungerar en gång om du förlorar din autentiseringsapp. De visas bara nu.`)
};

const tr_settings_2fa_codes_text = /** @type {(inputs: Settings_2fa_Codes_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kimlik doğrulayıcı uygulamanı kaybedersen her kod bir kez çalışır. Sadece şimdi gösterilirler.`)
};

const zh_settings_2fa_codes_text = /** @type {(inputs: Settings_2fa_Codes_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果丢失验证器应用，每个恢复码可使用一次。它们只会显示这一次。`)
};

const ja_settings_2fa_codes_text = /** @type {(inputs: Settings_2fa_Codes_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証アプリを失くしたときは、各コードを1回だけ使えます。表示されるのは今だけです。`)
};

/**
* | output |
* | --- |
* | "Each code works once if you lose your authenticator app. They are shown only now." |
*
* @param {Settings_2fa_Codes_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_codes_text = /** @type {((inputs?: Settings_2fa_Codes_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Codes_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_codes_text(inputs)
	if (locale === "de") return de_settings_2fa_codes_text(inputs)
	if (locale === "fr") return fr_settings_2fa_codes_text(inputs)
	if (locale === "it") return it_settings_2fa_codes_text(inputs)
	if (locale === "nl") return nl_settings_2fa_codes_text(inputs)
	if (locale === "pl") return pl_settings_2fa_codes_text(inputs)
	if (locale === "pt") return pt_settings_2fa_codes_text(inputs)
	if (locale === "ru") return ru_settings_2fa_codes_text(inputs)
	if (locale === "sv") return sv_settings_2fa_codes_text(inputs)
	if (locale === "tr") return tr_settings_2fa_codes_text(inputs)
	if (locale === "zh") return zh_settings_2fa_codes_text(inputs)
	if (locale === "ja") return ja_settings_2fa_codes_text(inputs)
	return en_settings_2fa_codes_text(inputs)
});
