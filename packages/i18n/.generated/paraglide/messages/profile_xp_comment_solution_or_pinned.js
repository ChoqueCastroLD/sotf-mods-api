/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_Comment_Solution_Or_PinnedInputs */

const en_profile_xp_comment_solution_or_pinned = /** @type {(inputs: Profile_Xp_Comment_Solution_Or_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment marked as the solution or pinned by the creator`)
};

const es_profile_xp_comment_solution_or_pinned = /** @type {(inputs: Profile_Xp_Comment_Solution_Or_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario marcado como solución o fijado por el creador`)
};

const de_profile_xp_comment_solution_or_pinned = /** @type {(inputs: Profile_Xp_Comment_Solution_Or_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar vom Ersteller als Lösung markiert oder angepinnt`)
};

const fr_profile_xp_comment_solution_or_pinned = /** @type {(inputs: Profile_Xp_Comment_Solution_Or_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire marqué comme solution ou épinglé par le créateur`)
};

const it_profile_xp_comment_solution_or_pinned = /** @type {(inputs: Profile_Xp_Comment_Solution_Or_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento segnato come soluzione o fissato dal creatore`)
};

const nl_profile_xp_comment_solution_or_pinned = /** @type {(inputs: Profile_Xp_Comment_Solution_Or_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie door de maker als oplossing gemarkeerd of vastgezet`)
};

const pl_profile_xp_comment_solution_or_pinned = /** @type {(inputs: Profile_Xp_Comment_Solution_Or_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz oznaczony przez twórcę jako rozwiązanie lub przypięty`)
};

const pt_profile_xp_comment_solution_or_pinned = /** @type {(inputs: Profile_Xp_Comment_Solution_Or_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário marcado como solução ou fixado pelo criador`)
};

const ru_profile_xp_comment_solution_or_pinned = /** @type {(inputs: Profile_Xp_Comment_Solution_Or_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий отмечен автором как решение или закреплён`)
};

const sv_profile_xp_comment_solution_or_pinned = /** @type {(inputs: Profile_Xp_Comment_Solution_Or_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar markerad som lösning eller fäst av skaparen`)
};

const tr_profile_xp_comment_solution_or_pinned = /** @type {(inputs: Profile_Xp_Comment_Solution_Or_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üretici tarafından çözüm olarak işaretlenen veya sabitlenen yorum`)
};

const zh_profile_xp_comment_solution_or_pinned = /** @type {(inputs: Profile_Xp_Comment_Solution_Or_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论被创作者标记为解决方案或置顶`)
};

const ja_profile_xp_comment_solution_or_pinned = /** @type {(inputs: Profile_Xp_Comment_Solution_Or_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントがクリエイターに解決策としてマーク、またはピン留めされる`)
};

/**
* | output |
* | --- |
* | "Comment marked as the solution or pinned by the creator" |
*
* @param {Profile_Xp_Comment_Solution_Or_PinnedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_comment_solution_or_pinned = /** @type {((inputs?: Profile_Xp_Comment_Solution_Or_PinnedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Comment_Solution_Or_PinnedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_comment_solution_or_pinned(inputs)
	if (locale === "de") return de_profile_xp_comment_solution_or_pinned(inputs)
	if (locale === "fr") return fr_profile_xp_comment_solution_or_pinned(inputs)
	if (locale === "it") return it_profile_xp_comment_solution_or_pinned(inputs)
	if (locale === "nl") return nl_profile_xp_comment_solution_or_pinned(inputs)
	if (locale === "pl") return pl_profile_xp_comment_solution_or_pinned(inputs)
	if (locale === "pt") return pt_profile_xp_comment_solution_or_pinned(inputs)
	if (locale === "ru") return ru_profile_xp_comment_solution_or_pinned(inputs)
	if (locale === "sv") return sv_profile_xp_comment_solution_or_pinned(inputs)
	if (locale === "tr") return tr_profile_xp_comment_solution_or_pinned(inputs)
	if (locale === "zh") return zh_profile_xp_comment_solution_or_pinned(inputs)
	if (locale === "ja") return ja_profile_xp_comment_solution_or_pinned(inputs)
	return en_profile_xp_comment_solution_or_pinned(inputs)
});
