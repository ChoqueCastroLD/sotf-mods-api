/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Meta_Register_DescriptionInputs */

const en_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Register on SOTF Mods to follow mods, get notified when they update and publish your own.`)
};

const es_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regístrate en SOTF Mods para seguir mods, recibir avisos cuando se actualicen y publicar los tuyos.`)
};

const de_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registriere dich bei SOTF Mods, um Mods zu folgen, bei Updates benachrichtigt zu werden und eigene Mods zu veröffentlichen.`)
};

const fr_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscrivez-vous sur SOTF Mods pour suivre des mods, être prévenu de leurs mises à jour et publier les vôtres.`)
};

const it_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrati su SOTF Mods per seguire le mod, ricevere una notifica quando si aggiornano e pubblicare le tue.`)
};

const nl_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registreer je op SOTF Mods om mods te volgen, een melding te krijgen bij updates en je eigen mods te publiceren.`)
};

const pl_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarejestruj się w SOTF Mods, aby obserwować mody, dostawać powiadomienia o aktualizacjach i publikować własne.`)
};

const pt_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registre-se no SOTF Mods para seguir mods, receber avisos quando forem atualizados e publicar os seus.`)
};

const ru_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зарегистрируйтесь на SOTF Mods, чтобы следить за модами, получать уведомления об обновлениях и публиковать свои.`)
};

const sv_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrera dig på SOTF Mods för att följa moddar, få en avisering när de uppdateras och publicera dina egna.`)
};

const tr_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları takip etmek, güncellendiklerinde haber almak ve kendi modlarını yayımlamak için SOTF Mods’a kayıt ol.`)
};

const zh_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注册 SOTF Mods，关注模组，在更新时收到通知，并发布你自己的模组。`)
};

const ja_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods に登録すると、MOD をフォローし、更新の通知を受け取り、自分の MOD を公開できます。`)
};

/**
* | output |
* | --- |
* | "Register on SOTF Mods to follow mods, get notified when they update and publish your own." |
*
* @param {Auth_Meta_Register_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_meta_register_description = /** @type {((inputs?: Auth_Meta_Register_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Register_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_meta_register_description(inputs)
	if (locale === "de") return de_auth_meta_register_description(inputs)
	if (locale === "fr") return fr_auth_meta_register_description(inputs)
	if (locale === "it") return it_auth_meta_register_description(inputs)
	if (locale === "nl") return nl_auth_meta_register_description(inputs)
	if (locale === "pl") return pl_auth_meta_register_description(inputs)
	if (locale === "pt") return pt_auth_meta_register_description(inputs)
	if (locale === "ru") return ru_auth_meta_register_description(inputs)
	if (locale === "sv") return sv_auth_meta_register_description(inputs)
	if (locale === "tr") return tr_auth_meta_register_description(inputs)
	if (locale === "zh") return zh_auth_meta_register_description(inputs)
	if (locale === "ja") return ja_auth_meta_register_description(inputs)
	return en_auth_meta_register_description(inputs)
});
