/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Relogin_BannerInputs */

const en_common_relogin_banner = /** @type {(inputs: Common_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We rebuilt SOTF Mods. Sign in again — your password is the same.`)
};

const es_common_relogin_banner = /** @type {(inputs: Common_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hemos renovado SOTF Mods. Inicia sesión de nuevo: tu contraseña es la misma.`)
};

const de_common_relogin_banner = /** @type {(inputs: Common_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wir haben SOTF Mods neu gebaut. Melde dich erneut an – dein Passwort ist dasselbe.`)
};

const fr_common_relogin_banner = /** @type {(inputs: Common_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nous avons refait SOTF Mods. Reconnectez-vous : votre mot de passe n’a pas changé.`)
};

const it_common_relogin_banner = /** @type {(inputs: Common_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbiamo rinnovato SOTF Mods. Accedi di nuovo: la tua password è la stessa.`)
};

const nl_common_relogin_banner = /** @type {(inputs: Common_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We hebben SOTF Mods opnieuw gebouwd. Log opnieuw in: je wachtwoord is hetzelfde.`)
};

const pl_common_relogin_banner = /** @type {(inputs: Common_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przebudowaliśmy SOTF Mods. Zaloguj się ponownie — hasło się nie zmieniło.`)
};

const pt_common_relogin_banner = /** @type {(inputs: Common_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reconstruímos o SOTF Mods. Entre de novo: sua senha continua a mesma.`)
};

const ru_common_relogin_banner = /** @type {(inputs: Common_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мы полностью обновили SOTF Mods. Войдите снова — пароль остался прежним.`)
};

const sv_common_relogin_banner = /** @type {(inputs: Common_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi har byggt om SOTF Mods. Logga in igen – ditt lösenord är detsamma.`)
};

const tr_common_relogin_banner = /** @type {(inputs: Common_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’u yeniden inşa ettik. Tekrar giriş yap; şifren aynı.`)
};

const zh_common_relogin_banner = /** @type {(inputs: Common_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 已全面重建。请重新登录，密码保持不变。`)
};

const ja_common_relogin_banner = /** @type {(inputs: Common_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods をリニューアルしました。もう一度ログインしてください。パスワードは変わりません。`)
};

/**
* | output |
* | --- |
* | "We rebuilt SOTF Mods. Sign in again — your password is the same." |
*
* @param {Common_Relogin_BannerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_relogin_banner = /** @type {((inputs?: Common_Relogin_BannerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Relogin_BannerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_relogin_banner(inputs)
	if (locale === "de") return de_common_relogin_banner(inputs)
	if (locale === "fr") return fr_common_relogin_banner(inputs)
	if (locale === "it") return it_common_relogin_banner(inputs)
	if (locale === "nl") return nl_common_relogin_banner(inputs)
	if (locale === "pl") return pl_common_relogin_banner(inputs)
	if (locale === "pt") return pt_common_relogin_banner(inputs)
	if (locale === "ru") return ru_common_relogin_banner(inputs)
	if (locale === "sv") return sv_common_relogin_banner(inputs)
	if (locale === "tr") return tr_common_relogin_banner(inputs)
	if (locale === "zh") return zh_common_relogin_banner(inputs)
	if (locale === "ja") return ja_common_relogin_banner(inputs)
	return en_common_relogin_banner(inputs)
});
