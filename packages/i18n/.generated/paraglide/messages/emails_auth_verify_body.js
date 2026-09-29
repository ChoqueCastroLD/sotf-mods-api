/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Verify_BodyInputs */

const en_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welcome to the island. Confirm this address to publish mods, comment, write reviews and report compatibility.`)
};

const es_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bienvenido a la isla. Confirma esta dirección para publicar mods, comentar, escribir reseñas e informar de compatibilidad.`)
};

const de_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Willkommen auf der Insel. Bestätige diese Adresse, um Mods zu veröffentlichen, zu kommentieren, Bewertungen zu schreiben und Kompatibilität zu melden.`)
};

const fr_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bienvenue sur l’île. Confirmez cette adresse pour publier des mods, commenter, écrire des avis et signaler la compatibilité.`)
};

const it_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benvenuto sull’isola. Conferma questo indirizzo per pubblicare mod, commentare, scrivere recensioni e segnalare la compatibilità.`)
};

const nl_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welkom op het eiland. Bevestig dit adres om mods te publiceren, te reageren, recensies te schrijven en compatibiliteit te melden.`)
};

const pl_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Witaj na wyspie. Potwierdź ten adres, aby publikować mody, komentować, pisać recenzje i zgłaszać kompatybilność.`)
};

const pt_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bem-vindo à ilha. Confirme este endereço para publicar mods, comentar, escrever avaliações e informar compatibilidade.`)
};

const ru_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добро пожаловать на остров. Подтвердите этот адрес, чтобы публиковать моды, комментировать, писать отзывы и сообщать о совместимости.`)
};

const sv_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välkommen till ön. Bekräfta adressen för att publicera moddar, kommentera, skriva recensioner och rapportera kompatibilitet.`)
};

const tr_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adaya hoş geldin. Mod yayınlamak, yorum yapmak, inceleme yazmak ve uyumluluk bildirmek için bu adresi doğrula.`)
};

const zh_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`欢迎来到岛上。确认此邮箱后，即可发布模组、发表评论、撰写评价和报告兼容性。`)
};

const ja_emails_auth_verify_body = /** @type {(inputs: Emails_Auth_Verify_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島へようこそ。このアドレスを確認すると、MOD の公開、コメント、レビューの投稿、互換性の報告ができるようになります。`)
};

/**
* | output |
* | --- |
* | "Welcome to the island. Confirm this address to publish mods, comment, write reviews and report compatibility." |
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
