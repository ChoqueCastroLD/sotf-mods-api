/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Helping_Hand_HintInputs */

const en_profile_badge_helping_hand_hint = /** @type {(inputs: Profile_Badge_Helping_Hand_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Have 5 comments marked as the solution or pinned by a creator.`)
};

const es_profile_badge_helping_hand_hint = /** @type {(inputs: Profile_Badge_Helping_Hand_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consigue que un creador marque 5 de tus comentarios como solución o los fije.`)
};

const de_profile_badge_helping_hand_hint = /** @type {(inputs: Profile_Badge_Helping_Hand_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lass 5 deiner Kommentare von einem Ersteller als Lösung markieren oder anpinnen.`)
};

const fr_profile_badge_helping_hand_hint = /** @type {(inputs: Profile_Badge_Helping_Hand_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faites marquer 5 de vos commentaires comme solution ou épingler par un créateur.`)
};

const it_profile_badge_helping_hand_hint = /** @type {(inputs: Profile_Badge_Helping_Hand_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fai segnare 5 tuoi commenti come soluzione o fissare da un creatore.`)
};

const nl_profile_badge_helping_hand_hint = /** @type {(inputs: Profile_Badge_Helping_Hand_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laat 5 van je reacties door een maker als oplossing markeren of vastzetten.`)
};

const pl_profile_badge_helping_hand_hint = /** @type {(inputs: Profile_Badge_Helping_Hand_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niech twórca oznaczy 5 twoich komentarzy jako rozwiązanie lub je przypnie.`)
};

const pt_profile_badge_helping_hand_hint = /** @type {(inputs: Profile_Badge_Helping_Hand_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tenha 5 comentários marcados como solução ou fixados por um criador.`)
};

const ru_profile_badge_helping_hand_hint = /** @type {(inputs: Profile_Badge_Helping_Hand_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добейтесь, чтобы автор отметил 5 ваших комментариев как решение или закрепил их.`)
};

const sv_profile_badge_helping_hand_hint = /** @type {(inputs: Profile_Badge_Helping_Hand_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Få 5 av dina kommentarer markerade som lösning eller fästa av en skapare.`)
};

const tr_profile_badge_helping_hand_hint = /** @type {(inputs: Profile_Badge_Helping_Hand_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`5 yorumunun bir üretici tarafından çözüm olarak işaretlenmesini veya sabitlenmesini sağla.`)
};

const zh_profile_badge_helping_hand_hint = /** @type {(inputs: Profile_Badge_Helping_Hand_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有 5 条评论被创作者标记为解决方案或置顶。`)
};

const ja_profile_badge_helping_hand_hint = /** @type {(inputs: Profile_Badge_Helping_Hand_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント 5 件をクリエイターに解決策としてマーク、またはピン留めしてもらう。`)
};

/**
* | output |
* | --- |
* | "Have 5 comments marked as the solution or pinned by a creator." |
*
* @param {Profile_Badge_Helping_Hand_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_helping_hand_hint = /** @type {((inputs?: Profile_Badge_Helping_Hand_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Helping_Hand_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_helping_hand_hint(inputs)
	if (locale === "de") return de_profile_badge_helping_hand_hint(inputs)
	if (locale === "fr") return fr_profile_badge_helping_hand_hint(inputs)
	if (locale === "it") return it_profile_badge_helping_hand_hint(inputs)
	if (locale === "nl") return nl_profile_badge_helping_hand_hint(inputs)
	if (locale === "pl") return pl_profile_badge_helping_hand_hint(inputs)
	if (locale === "pt") return pt_profile_badge_helping_hand_hint(inputs)
	if (locale === "ru") return ru_profile_badge_helping_hand_hint(inputs)
	if (locale === "sv") return sv_profile_badge_helping_hand_hint(inputs)
	if (locale === "tr") return tr_profile_badge_helping_hand_hint(inputs)
	if (locale === "zh") return zh_profile_badge_helping_hand_hint(inputs)
	if (locale === "ja") return ja_profile_badge_helping_hand_hint(inputs)
	return en_profile_badge_helping_hand_hint(inputs)
});
