/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Name_HintInputs */

const en_upload_name_hint = /** @type {(inputs: Upload_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As players call it. 2 to 80 characters.`)
};

const es_upload_name_hint = /** @type {(inputs: Upload_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como lo llaman los jugadores. De 2 a 80 caracteres.`)
};

const de_upload_name_hint = /** @type {(inputs: Upload_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So, wie Spieler ihn nennen. 2 bis 80 Zeichen.`)
};

const fr_upload_name_hint = /** @type {(inputs: Upload_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comme les joueurs l’appellent. De 2 à 80 caractères.`)
};

const it_upload_name_hint = /** @type {(inputs: Upload_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come la chiamano i giocatori. Da 2 a 80 caratteri.`)
};

const nl_upload_name_hint = /** @type {(inputs: Upload_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoals spelers hem noemen. 2 tot 80 tekens.`)
};

const pl_upload_name_hint = /** @type {(inputs: Upload_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tak, jak nazywają go gracze. Od 2 do 80 znaków.`)
};

const pt_upload_name_hint = /** @type {(inputs: Upload_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como os jogadores o chamam. De 2 a 80 caracteres.`)
};

const ru_upload_name_hint = /** @type {(inputs: Upload_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как его называют игроки. От 2 до 80 символов.`)
};

const sv_upload_name_hint = /** @type {(inputs: Upload_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Som spelarna kallar den. 2 till 80 tecken.`)
};

const tr_upload_name_hint = /** @type {(inputs: Upload_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncuların ona verdiği ad. 2 ile 80 karakter arası.`)
};

const zh_upload_name_hint = /** @type {(inputs: Upload_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`玩家对它的称呼。2 到 80 个字符。`)
};

const ja_upload_name_hint = /** @type {(inputs: Upload_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーが呼ぶ名前。2〜80文字。`)
};

/**
* | output |
* | --- |
* | "As players call it. 2 to 80 characters." |
*
* @param {Upload_Name_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_name_hint = /** @type {((inputs?: Upload_Name_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Name_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_name_hint(inputs)
	if (locale === "de") return de_upload_name_hint(inputs)
	if (locale === "fr") return fr_upload_name_hint(inputs)
	if (locale === "it") return it_upload_name_hint(inputs)
	if (locale === "nl") return nl_upload_name_hint(inputs)
	if (locale === "pl") return pl_upload_name_hint(inputs)
	if (locale === "pt") return pt_upload_name_hint(inputs)
	if (locale === "ru") return ru_upload_name_hint(inputs)
	if (locale === "sv") return sv_upload_name_hint(inputs)
	if (locale === "tr") return tr_upload_name_hint(inputs)
	if (locale === "zh") return zh_upload_name_hint(inputs)
	if (locale === "ja") return ja_upload_name_hint(inputs)
	return en_upload_name_hint(inputs)
});
