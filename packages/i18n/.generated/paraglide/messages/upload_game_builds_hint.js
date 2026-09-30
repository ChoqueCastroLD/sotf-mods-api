/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Game_Builds_HintInputs */

const en_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only tick the patches you actually played on.`)
};

const es_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marca solo los parches en los que jugaste de verdad.`)
};

const de_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hake nur die Patches an, auf denen du wirklich gespielt hast.`)
};

const fr_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne cochez que les patchs sur lesquels vous avez vraiment joué.`)
};

const it_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seleziona solo le patch su cui hai davvero giocato.`)
};

const nl_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vink alleen de patches aan waarop je echt hebt gespeeld.`)
};

const pl_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaznacz tylko te łatki, na których naprawdę grałeś.`)
};

const pt_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marque só os patches em que você realmente jogou.`)
};

const ru_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмечайте только патчи, на которых вы действительно играли.`)
};

const sv_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kryssa bara i patcharna du faktiskt har spelat på.`)
};

const tr_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca gerçekten oynadığın yamaları işaretle.`)
};

const zh_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只勾选你真正玩过的补丁。`)
};

const ja_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実際に遊んだパッチだけにチェックしてください。`)
};

/**
* | output |
* | --- |
* | "Only tick the patches you actually played on." |
*
* @param {Upload_Game_Builds_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_builds_hint = /** @type {((inputs?: Upload_Game_Builds_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_builds_hint(inputs)
	if (locale === "de") return de_upload_game_builds_hint(inputs)
	if (locale === "fr") return fr_upload_game_builds_hint(inputs)
	if (locale === "it") return it_upload_game_builds_hint(inputs)
	if (locale === "nl") return nl_upload_game_builds_hint(inputs)
	if (locale === "pl") return pl_upload_game_builds_hint(inputs)
	if (locale === "pt") return pt_upload_game_builds_hint(inputs)
	if (locale === "ru") return ru_upload_game_builds_hint(inputs)
	if (locale === "sv") return sv_upload_game_builds_hint(inputs)
	if (locale === "tr") return tr_upload_game_builds_hint(inputs)
	if (locale === "zh") return zh_upload_game_builds_hint(inputs)
	if (locale === "ja") return ja_upload_game_builds_hint(inputs)
	return en_upload_game_builds_hint(inputs)
});
