/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Reset_IntroInputs */

const en_auth_reset_intro = /** @type {(inputs: Auth_Reset_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving it logs you out everywhere. Then log in with the new password.`)
};

const es_auth_reset_intro = /** @type {(inputs: Auth_Reset_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al guardarla se cerrarán todas tus sesiones; después, inicia sesión con la nueva.`)
};

const de_auth_reset_intro = /** @type {(inputs: Auth_Reset_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beim Speichern wirst du überall abgemeldet; melde dich danach mit dem neuen Passwort an.`)
};

const fr_auth_reset_intro = /** @type {(inputs: Auth_Reset_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’enregistrer vous déconnecte partout ; connectez-vous ensuite avec le nouveau.`)
};

const it_auth_reset_intro = /** @type {(inputs: Auth_Reset_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvandola verrai disconnesso ovunque; poi accedi con la nuova password.`)
};

const nl_auth_reset_intro = /** @type {(inputs: Auth_Reset_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na het opslaan word je overal uitgelogd; log daarna in met het nieuwe wachtwoord.`)
};

const pl_auth_reset_intro = /** @type {(inputs: Auth_Reset_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisanie wyloguje cię wszędzie; potem zaloguj się nowym hasłem.`)
};

const pt_auth_reset_intro = /** @type {(inputs: Auth_Reset_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ao salvar, você sai de todas as sessões; depois, entre com a nova senha.`)
};

const ru_auth_reset_intro = /** @type {(inputs: Auth_Reset_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`После сохранения вы выйдете на всех устройствах; затем войдите с новым паролем.`)
};

const sv_auth_reset_intro = /** @type {(inputs: Auth_Reset_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`När du sparar loggas du ut överallt; logga sedan in med det nya lösenordet.`)
};

const tr_auth_reset_intro = /** @type {(inputs: Auth_Reset_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydettiğinde her yerde oturumun kapanır; ardından yeni şifrenle giriş yap.`)
};

const zh_auth_reset_intro = /** @type {(inputs: Auth_Reset_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存后所有设备都会退出登录，之后请使用新密码登录。`)
};

const ja_auth_reset_intro = /** @type {(inputs: Auth_Reset_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存するとすべてのデバイスからログアウトされます。その後、新しいパスワードでログインしてください。`)
};

/**
* | output |
* | --- |
* | "Saving it logs you out everywhere. Then log in with the new password." |
*
* @param {Auth_Reset_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_reset_intro = /** @type {((inputs?: Auth_Reset_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Reset_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_reset_intro(inputs)
	if (locale === "de") return de_auth_reset_intro(inputs)
	if (locale === "fr") return fr_auth_reset_intro(inputs)
	if (locale === "it") return it_auth_reset_intro(inputs)
	if (locale === "nl") return nl_auth_reset_intro(inputs)
	if (locale === "pl") return pl_auth_reset_intro(inputs)
	if (locale === "pt") return pt_auth_reset_intro(inputs)
	if (locale === "ru") return ru_auth_reset_intro(inputs)
	if (locale === "sv") return sv_auth_reset_intro(inputs)
	if (locale === "tr") return tr_auth_reset_intro(inputs)
	if (locale === "zh") return zh_auth_reset_intro(inputs)
	if (locale === "ja") return ja_auth_reset_intro(inputs)
	return en_auth_reset_intro(inputs)
});
