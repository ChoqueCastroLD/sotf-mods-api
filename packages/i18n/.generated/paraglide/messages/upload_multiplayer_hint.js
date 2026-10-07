/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_HintInputs */

const en_upload_multiplayer_hint = /** @type {(inputs: Upload_Multiplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Who needs the mod installed to play together.`)
};

const es_upload_multiplayer_hint = /** @type {(inputs: Upload_Multiplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quién necesita tener el mod instalado para jugar en grupo.`)
};

const de_upload_multiplayer_hint = /** @type {(inputs: Upload_Multiplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wer den Mod installiert haben muss, um zusammen zu spielen.`)
};

const fr_upload_multiplayer_hint = /** @type {(inputs: Upload_Multiplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qui doit avoir le mod installé pour jouer ensemble.`)
};

const it_upload_multiplayer_hint = /** @type {(inputs: Upload_Multiplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chi deve avere la mod installata per giocare insieme.`)
};

const nl_upload_multiplayer_hint = /** @type {(inputs: Upload_Multiplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie de mod geïnstalleerd moet hebben om samen te spelen.`)
};

const pl_upload_multiplayer_hint = /** @type {(inputs: Upload_Multiplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kto musi mieć zainstalowany mod, aby grać razem.`)
};

const pt_upload_multiplayer_hint = /** @type {(inputs: Upload_Multiplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quem precisa ter o mod instalado para jogar em grupo.`)
};

const ru_upload_multiplayer_hint = /** @type {(inputs: Upload_Multiplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кому нужно установить мод, чтобы играть вместе.`)
};

const sv_upload_multiplayer_hint = /** @type {(inputs: Upload_Multiplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vem som måste ha modden installerad för att spela tillsammans.`)
};

const tr_upload_multiplayer_hint = /** @type {(inputs: Upload_Multiplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Birlikte oynamak için modun kimde kurulu olması gerekir.`)
};

const zh_upload_multiplayer_hint = /** @type {(inputs: Upload_Multiplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一起游玩时，谁需要安装这个模组。`)
};

const ja_upload_multiplayer_hint = /** @type {(inputs: Upload_Multiplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一緒に遊ぶとき、誰がMODを入れている必要があるか。`)
};

/**
* | output |
* | --- |
* | "Who needs the mod installed to play together." |
*
* @param {Upload_Multiplayer_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_hint = /** @type {((inputs?: Upload_Multiplayer_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_hint(inputs)
	if (locale === "de") return de_upload_multiplayer_hint(inputs)
	if (locale === "fr") return fr_upload_multiplayer_hint(inputs)
	if (locale === "it") return it_upload_multiplayer_hint(inputs)
	if (locale === "nl") return nl_upload_multiplayer_hint(inputs)
	if (locale === "pl") return pl_upload_multiplayer_hint(inputs)
	if (locale === "pt") return pt_upload_multiplayer_hint(inputs)
	if (locale === "ru") return ru_upload_multiplayer_hint(inputs)
	if (locale === "sv") return sv_upload_multiplayer_hint(inputs)
	if (locale === "tr") return tr_upload_multiplayer_hint(inputs)
	if (locale === "zh") return zh_upload_multiplayer_hint(inputs)
	if (locale === "ja") return ja_upload_multiplayer_hint(inputs)
	return en_upload_multiplayer_hint(inputs)
});
