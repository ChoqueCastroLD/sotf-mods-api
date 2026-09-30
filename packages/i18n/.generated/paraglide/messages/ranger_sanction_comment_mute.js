/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Comment_MuteInputs */

const en_ranger_sanction_comment_mute = /** @type {(inputs: Ranger_Sanction_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mute comments`)
};

const es_ranger_sanction_comment_mute = /** @type {(inputs: Ranger_Sanction_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silenciar comentarios`)
};

const de_ranger_sanction_comment_mute = /** @type {(inputs: Ranger_Sanction_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare stummschalten`)
};

const fr_ranger_sanction_comment_mute = /** @type {(inputs: Ranger_Sanction_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rendre muet (commentaires)`)
};

const it_ranger_sanction_comment_mute = /** @type {(inputs: Ranger_Sanction_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silenzia i commenti`)
};

const nl_ranger_sanction_comment_mute = /** @type {(inputs: Ranger_Sanction_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties dempen`)
};

const pl_ranger_sanction_comment_mute = /** @type {(inputs: Ranger_Sanction_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wycisz komentarze`)
};

const pt_ranger_sanction_comment_mute = /** @type {(inputs: Ranger_Sanction_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silenciar comentários`)
};

const ru_ranger_sanction_comment_mute = /** @type {(inputs: Ranger_Sanction_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запретить комментарии`)
};

const sv_ranger_sanction_comment_mute = /** @type {(inputs: Ranger_Sanction_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tysta kommentarer`)
};

const tr_ranger_sanction_comment_mute = /** @type {(inputs: Ranger_Sanction_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumları sustur`)
};

const zh_ranger_sanction_comment_mute = /** @type {(inputs: Ranger_Sanction_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`禁止评论`)
};

const ja_ranger_sanction_comment_mute = /** @type {(inputs: Ranger_Sanction_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント禁止`)
};

/**
* | output |
* | --- |
* | "Mute comments" |
*
* @param {Ranger_Sanction_Comment_MuteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_comment_mute = /** @type {((inputs?: Ranger_Sanction_Comment_MuteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Comment_MuteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_comment_mute(inputs)
	if (locale === "de") return de_ranger_sanction_comment_mute(inputs)
	if (locale === "fr") return fr_ranger_sanction_comment_mute(inputs)
	if (locale === "it") return it_ranger_sanction_comment_mute(inputs)
	if (locale === "nl") return nl_ranger_sanction_comment_mute(inputs)
	if (locale === "pl") return pl_ranger_sanction_comment_mute(inputs)
	if (locale === "pt") return pt_ranger_sanction_comment_mute(inputs)
	if (locale === "ru") return ru_ranger_sanction_comment_mute(inputs)
	if (locale === "sv") return sv_ranger_sanction_comment_mute(inputs)
	if (locale === "tr") return tr_ranger_sanction_comment_mute(inputs)
	if (locale === "zh") return zh_ranger_sanction_comment_mute(inputs)
	if (locale === "ja") return ja_ranger_sanction_comment_mute(inputs)
	return en_ranger_sanction_comment_mute(inputs)
});
