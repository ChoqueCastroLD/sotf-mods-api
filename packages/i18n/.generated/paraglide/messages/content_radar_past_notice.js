/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Content_Radar_Past_NoticeInputs */

const en_content_radar_past_notice = /** @type {(inputs: Content_Radar_Past_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This is an older build. The game is on ${i?.build} now.`)
};

const es_content_radar_past_notice = /** @type {(inputs: Content_Radar_Past_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esta es una build anterior. El juego va ahora por la ${i?.build}.`)
};

const de_content_radar_past_notice = /** @type {(inputs: Content_Radar_Past_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Das ist ein älterer Build. Das Spiel ist jetzt auf ${i?.build}.`)
};

const fr_content_radar_past_notice = /** @type {(inputs: Content_Radar_Past_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il s’agit d’un ancien build. Le jeu est maintenant en ${i?.build}.`)
};

const it_content_radar_past_notice = /** @type {(inputs: Content_Radar_Past_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Questa è una build precedente. Ora il gioco è alla ${i?.build}.`)
};

const nl_content_radar_past_notice = /** @type {(inputs: Content_Radar_Past_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dit is een oudere build. De game staat nu op ${i?.build}.`)
};

const pl_content_radar_past_notice = /** @type {(inputs: Content_Radar_Past_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`To starszy build. Gra jest teraz w wersji ${i?.build}.`)
};

const pt_content_radar_past_notice = /** @type {(inputs: Content_Radar_Past_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esta é uma build antiga. O jogo agora está na ${i?.build}.`)
};

const ru_content_radar_past_notice = /** @type {(inputs: Content_Radar_Past_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Это старая сборка. Сейчас игра на ${i?.build}.`)
};

const sv_content_radar_past_notice = /** @type {(inputs: Content_Radar_Past_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Det här är en äldre build. Spelet är nu på ${i?.build}.`)
};

const tr_content_radar_past_notice = /** @type {(inputs: Content_Radar_Past_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bu eski bir sürüm. Oyun şu an ${i?.build} sürümünde.`)
};

const zh_content_radar_past_notice = /** @type {(inputs: Content_Radar_Past_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`这是旧版本。游戏现在是 ${i?.build}。`)
};

const ja_content_radar_past_notice = /** @type {(inputs: Content_Radar_Past_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`これは過去のビルドです。現在のゲームは ${i?.build} です。`)
};

/**
* | output |
* | --- |
* | "This is an older build. The game is on {build} now." |
*
* @param {Content_Radar_Past_NoticeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_past_notice = /** @type {((inputs: Content_Radar_Past_NoticeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Past_NoticeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_past_notice(inputs)
	if (locale === "de") return de_content_radar_past_notice(inputs)
	if (locale === "fr") return fr_content_radar_past_notice(inputs)
	if (locale === "it") return it_content_radar_past_notice(inputs)
	if (locale === "nl") return nl_content_radar_past_notice(inputs)
	if (locale === "pl") return pl_content_radar_past_notice(inputs)
	if (locale === "pt") return pt_content_radar_past_notice(inputs)
	if (locale === "ru") return ru_content_radar_past_notice(inputs)
	if (locale === "sv") return sv_content_radar_past_notice(inputs)
	if (locale === "tr") return tr_content_radar_past_notice(inputs)
	if (locale === "zh") return zh_content_radar_past_notice(inputs)
	if (locale === "ja") return ja_content_radar_past_notice(inputs)
	return en_content_radar_past_notice(inputs)
});
