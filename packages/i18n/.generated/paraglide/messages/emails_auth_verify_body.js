/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Verify_BodyInputs */

const en_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welcome to SOTF Mods. Confirm this address to publish mods, comment and write reviews.`)
};

const es_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te damos la bienvenida a SOTF Mods. Confirma esta dirección para publicar mods, comentar y escribir reseñas.`)
};

const de_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Willkommen bei SOTF Mods. Bestätige diese Adresse, um Mods zu veröffentlichen, zu kommentieren und Bewertungen zu schreiben.`)
};

const fr_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bienvenue sur SOTF Mods. Confirmez cette adresse pour publier des mods, commenter et écrire des avis.`)
};

const it_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benvenuto su SOTF Mods. Conferma questo indirizzo per pubblicare mod, commentare e scrivere recensioni.`)
};

const nl_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welkom bij SOTF Mods. Bevestig dit adres om mods te publiceren, te reageren en recensies te schrijven.`)
};

const pl_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Witaj w SOTF Mods. Potwierdź ten adres, aby publikować mody, komentować i pisać recenzje.`)
};

const pt_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boas-vindas ao SOTF Mods. Confirme este endereço para publicar mods, comentar e escrever avaliações.`)
};

const ru_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добро пожаловать в SOTF Mods. Подтвердите этот адрес, чтобы публиковать моды, комментировать и писать отзывы.`)
};

const sv_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välkommen till SOTF Mods. Bekräfta adressen för att publicera moddar, kommentera och skriva recensioner.`)
};

const tr_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’a hoş geldin. Mod yayınlamak, yorum yapmak ve inceleme yazmak için bu adresi doğrula.`)
};

const zh_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`欢迎来到 SOTF Mods。确认此邮箱后，即可发布模组、发表评论和撰写评价。`)
};

const ja_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods へようこそ。このアドレスを確認すると、MOD の公開、コメント、レビューの投稿ができるようになります。`)
};

/**
* | output |
* | --- |
* | "Welcome to SOTF Mods. Confirm this address to publish mods, comment and write reviews." |
*
* @param {Emails_Auth_Verify_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_verify_body = /** @type {((inputs?: Emails_Auth_Verify_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Verify_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_verify_body(inputs)
	if (locale === "de") return de_emails_auth_verify_body(inputs)
	if (locale === "fr") return fr_emails_auth_verify_body(inputs)
	if (locale === "it") return it_emails_auth_verify_body(inputs)
	if (locale === "nl") return nl_emails_auth_verify_body(inputs)
	if (locale === "pl") return pl_emails_auth_verify_body(inputs)
	if (locale === "pt") return pt_emails_auth_verify_body(inputs)
	if (locale === "ru") return ru_emails_auth_verify_body(inputs)
	if (locale === "sv") return sv_emails_auth_verify_body(inputs)
	if (locale === "tr") return tr_emails_auth_verify_body(inputs)
	if (locale === "zh") return zh_emails_auth_verify_body(inputs)
	if (locale === "ja") return ja_emails_auth_verify_body(inputs)
	return en_emails_auth_verify_body(inputs)
});
