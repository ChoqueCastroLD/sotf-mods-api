/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Game_Builds_HintInputs */

const en_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick the patches you actually played on. Newest first.`)
};

const es_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige los parches en los que jugaste de verdad. Los más recientes primero.`)
};

const de_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle die Patches, auf denen du wirklich gespielt hast. Neueste zuerst.`)
};

const fr_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez les patchs sur lesquels vous avez vraiment joué. Les plus récents d’abord.`)
};

const it_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli le patch su cui hai davvero giocato. Le più recenti per prime.`)
};

const nl_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies de patches waarop je echt hebt gespeeld. Nieuwste eerst.`)
};

const pl_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz łatki, na których naprawdę grałeś. Najnowsze na górze.`)
};

const pt_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha os patches em que você realmente jogou. Os mais recentes primeiro.`)
};

const ru_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите патчи, на которых вы действительно играли. Сначала новые.`)
};

const sv_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj de patchar du faktiskt har spelat på. Nyast först.`)
};

const tr_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerçekten oynadığın yamaları seç. En yeniler önce.`)
};

const zh_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择你真正玩过的补丁，最新的排在前面。`)
};

const ja_upload_game_builds_hint = /** @type {(inputs: Upload_Game_Builds_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実際に遊んだパッチを選んでください。新しい順です。`)
};

/**
* | output |
* | --- |
* | "Pick the patches you actually played on. Newest first." |
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
