/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Meta_Login_DescriptionInputs */

const en_auth_meta_login_description = /** @type {(inputs: Auth_Meta_Login_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in to SOTF Mods to follow mods, get notified when they update and publish your own.`)
};

const es_auth_meta_login_description = /** @type {(inputs: Auth_Meta_Login_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión en SOTF Mods para seguir mods, recibir avisos cuando se actualicen y publicar los tuyos.`)
};

const de_auth_meta_login_description = /** @type {(inputs: Auth_Meta_Login_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich bei SOTF Mods an, um Mods zu folgen, bei Updates benachrichtigt zu werden und eigene zu veröffentlichen.`)
};

const fr_auth_meta_login_description = /** @type {(inputs: Auth_Meta_Login_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous à SOTF Mods pour suivre des mods, être prévenu de leurs mises à jour et publier les vôtres.`)
};

const it_auth_meta_login_description = /** @type {(inputs: Auth_Meta_Login_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi a SOTF Mods per seguire le mod, ricevere un avviso quando si aggiornano e pubblicare le tue.`)
};

const nl_auth_meta_login_description = /** @type {(inputs: Auth_Meta_Login_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in bij SOTF Mods om mods te volgen, een melding te krijgen bij updates en je eigen mods te publiceren.`)
};

const pl_auth_meta_login_description = /** @type {(inputs: Auth_Meta_Login_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się do SOTF Mods, aby obserwować mody, dostawać powiadomienia o aktualizacjach i publikować własne.`)
};

const pt_auth_meta_login_description = /** @type {(inputs: Auth_Meta_Login_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre no SOTF Mods para seguir mods, receber avisos quando forem atualizados e publicar os seus.`)
};

const ru_auth_meta_login_description = /** @type {(inputs: Auth_Meta_Login_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите в SOTF Mods, чтобы подписываться на моды, получать уведомления об обновлениях и публиковать свои.`)
};

const sv_auth_meta_login_description = /** @type {(inputs: Auth_Meta_Login_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in på SOTF Mods för att följa moddar, få en avisering när de uppdateras och publicera egna.`)
};

const tr_auth_meta_login_description = /** @type {(inputs: Auth_Meta_Login_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları takip etmek, güncellendiklerinde haber almak ve kendi modlarını yayınlamak için SOTF Mods’a giriş yap.`)
};

const zh_auth_meta_login_description = /** @type {(inputs: Auth_Meta_Login_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录 SOTF Mods，关注模组、在更新时收到提醒，并发布你自己的作品。`)
};

const ja_auth_meta_login_description = /** @type {(inputs: Auth_Meta_Login_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods にログインして、MOD をフォローしたり、更新の通知を受け取ったり、自作の MOD を公開したりしましょう。`)
};

/**
* | output |
* | --- |
* | "Log in to SOTF Mods to follow mods, get notified when they update and publish your own." |
*
* @param {Auth_Meta_Login_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_meta_login_description = /** @type {((inputs?: Auth_Meta_Login_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Login_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_meta_login_description(inputs)
	if (locale === "de") return de_auth_meta_login_description(inputs)
	if (locale === "fr") return fr_auth_meta_login_description(inputs)
	if (locale === "it") return it_auth_meta_login_description(inputs)
	if (locale === "nl") return nl_auth_meta_login_description(inputs)
	if (locale === "pl") return pl_auth_meta_login_description(inputs)
	if (locale === "pt") return pt_auth_meta_login_description(inputs)
	if (locale === "ru") return ru_auth_meta_login_description(inputs)
	if (locale === "sv") return sv_auth_meta_login_description(inputs)
	if (locale === "tr") return tr_auth_meta_login_description(inputs)
	if (locale === "zh") return zh_auth_meta_login_description(inputs)
	if (locale === "ja") return ja_auth_meta_login_description(inputs)
	return en_auth_meta_login_description(inputs)
});
