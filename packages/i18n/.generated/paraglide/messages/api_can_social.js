/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Can_SocialInputs */

const en_api_can_social = /** @type {(inputs: Api_Can_SocialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment, review and follow (keys with Interact)`)
};

const es_api_can_social = /** @type {(inputs: Api_Can_SocialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentar, reseñar y seguir (claves con Interactuar)`)
};

const de_api_can_social = /** @type {(inputs: Api_Can_SocialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentieren, bewerten und folgen (Schlüssel mit Interagieren)`)
};

const fr_api_can_social = /** @type {(inputs: Api_Can_SocialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenter, noter et suivre (clés avec Interagir)`)
};

const it_api_can_social = /** @type {(inputs: Api_Can_SocialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentare, recensire e seguire (chiavi con Interagisci)`)
};

const nl_api_can_social = /** @type {(inputs: Api_Can_SocialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reageren, beoordelen en volgen (sleutels met Interactie)`)
};

const pl_api_can_social = /** @type {(inputs: Api_Can_SocialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentować, recenzować i obserwować (klucze z Interakcją)`)
};

const pt_api_can_social = /** @type {(inputs: Api_Can_SocialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentar, avaliar e seguir (chaves com Interagir)`)
};

const ru_api_can_social = /** @type {(inputs: Api_Can_SocialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментировать, оставлять отзывы и подписываться (ключи с правом «Взаимодействие»)`)
};

const sv_api_can_social = /** @type {(inputs: Api_Can_SocialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentera, recensera och följa (nycklar med Interagera)`)
};

const tr_api_can_social = /** @type {(inputs: Api_Can_SocialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum yap, değerlendir ve takip et (Etkileşim izinli anahtarlar)`)
};

const zh_api_can_social = /** @type {(inputs: Api_Can_SocialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论、评价和关注（需要“互动”权限的密钥）`)
};

const ja_api_can_social = /** @type {(inputs: Api_Can_SocialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント、レビュー、フォロー（「交流」権限のキー）`)
};

/**
* | output |
* | --- |
* | "Comment, review and follow (keys with Interact)" |
*
* @param {Api_Can_SocialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_can_social = /** @type {((inputs?: Api_Can_SocialInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Can_SocialInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_can_social(inputs)
	if (locale === "de") return de_api_can_social(inputs)
	if (locale === "fr") return fr_api_can_social(inputs)
	if (locale === "it") return it_api_can_social(inputs)
	if (locale === "nl") return nl_api_can_social(inputs)
	if (locale === "pl") return pl_api_can_social(inputs)
	if (locale === "pt") return pt_api_can_social(inputs)
	if (locale === "ru") return ru_api_can_social(inputs)
	if (locale === "sv") return sv_api_can_social(inputs)
	if (locale === "tr") return tr_api_can_social(inputs)
	if (locale === "zh") return zh_api_can_social(inputs)
	if (locale === "ja") return ja_api_can_social(inputs)
	return en_api_can_social(inputs)
});
