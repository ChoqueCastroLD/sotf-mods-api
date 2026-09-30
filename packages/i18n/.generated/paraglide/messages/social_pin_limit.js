/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Pin_LimitInputs */

const en_social_pin_limit = /** @type {(inputs: Social_Pin_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can pin up to 3 comments. Unpin one first.`)
};

const es_social_pin_limit = /** @type {(inputs: Social_Pin_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puedes fijar hasta 3 comentarios. Desfija uno primero.`)
};

const de_social_pin_limit = /** @type {(inputs: Social_Pin_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kannst bis zu 3 Kommentare anheften. Löse zuerst einen.`)
};

const fr_social_pin_limit = /** @type {(inputs: Social_Pin_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous pouvez épingler 3 commentaires au maximum. Désépinglez-en un d’abord.`)
};

const it_social_pin_limit = /** @type {(inputs: Social_Pin_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puoi fissare al massimo 3 commenti. Rimuovine prima uno.`)
};

const nl_social_pin_limit = /** @type {(inputs: Social_Pin_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je kunt maximaal 3 reacties vastzetten. Maak er eerst een los.`)
};

const pl_social_pin_limit = /** @type {(inputs: Social_Pin_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Możesz przypiąć maksymalnie 3 komentarze. Najpierw odepnij jeden.`)
};

const pt_social_pin_limit = /** @type {(inputs: Social_Pin_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você pode fixar até 3 comentários. Desafixe um primeiro.`)
};

const ru_social_pin_limit = /** @type {(inputs: Social_Pin_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Можно закрепить не больше 3 комментариев. Сначала открепите один.`)
};

const sv_social_pin_limit = /** @type {(inputs: Social_Pin_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kan fästa högst 3 kommentarer. Lossa en först.`)
};

const tr_social_pin_limit = /** @type {(inputs: Social_Pin_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En fazla 3 yorum sabitleyebilirsin. Önce birini kaldır.`)
};

const zh_social_pin_limit = /** @type {(inputs: Social_Pin_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最多只能置顶 3 条评论，请先取消一条。`)
};

const ja_social_pin_limit = /** @type {(inputs: Social_Pin_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ピン留めは 3 件までです。先に 1 件解除してください。`)
};

/**
* | output |
* | --- |
* | "You can pin up to 3 comments. Unpin one first." |
*
* @param {Social_Pin_LimitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_pin_limit = /** @type {((inputs?: Social_Pin_LimitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Pin_LimitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_pin_limit(inputs)
	if (locale === "de") return de_social_pin_limit(inputs)
	if (locale === "fr") return fr_social_pin_limit(inputs)
	if (locale === "it") return it_social_pin_limit(inputs)
	if (locale === "nl") return nl_social_pin_limit(inputs)
	if (locale === "pl") return pl_social_pin_limit(inputs)
	if (locale === "pt") return pt_social_pin_limit(inputs)
	if (locale === "ru") return ru_social_pin_limit(inputs)
	if (locale === "sv") return sv_social_pin_limit(inputs)
	if (locale === "tr") return tr_social_pin_limit(inputs)
	if (locale === "zh") return zh_social_pin_limit(inputs)
	if (locale === "ja") return ja_social_pin_limit(inputs)
	return en_social_pin_limit(inputs)
});
