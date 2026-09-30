/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Template_Missing_ScreenshotsInputs */

const en_signals_template_missing_screenshots = /** @type {(inputs: Signals_Template_Missing_ScreenshotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please add at least one screenshot that shows the mod in game.`)
};

const es_signals_template_missing_screenshots = /** @type {(inputs: Signals_Template_Missing_ScreenshotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añade al menos una captura que muestre el mod en el juego.`)
};

const de_signals_template_missing_screenshots = /** @type {(inputs: Signals_Template_Missing_ScreenshotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Füge bitte mindestens einen Screenshot hinzu, der den Mod im Spiel zeigt.`)
};

const fr_signals_template_missing_screenshots = /** @type {(inputs: Signals_Template_Missing_ScreenshotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutez au moins une capture qui montre le mod en jeu.`)
};

const it_signals_template_missing_screenshots = /** @type {(inputs: Signals_Template_Missing_ScreenshotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi almeno uno screenshot che mostri la mod in gioco.`)
};

const nl_signals_template_missing_screenshots = /** @type {(inputs: Signals_Template_Missing_ScreenshotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voeg minstens één screenshot toe die de mod in het spel laat zien.`)
};

const pl_signals_template_missing_screenshots = /** @type {(inputs: Signals_Template_Missing_ScreenshotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj co najmniej jeden zrzut ekranu pokazujący mod w grze.`)
};

const pt_signals_template_missing_screenshots = /** @type {(inputs: Signals_Template_Missing_ScreenshotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicione pelo menos uma captura que mostre o mod no jogo.`)
};

const ru_signals_template_missing_screenshots = /** @type {(inputs: Signals_Template_Missing_ScreenshotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавьте хотя бы один скриншот мода в игре.`)
};

const sv_signals_template_missing_screenshots = /** @type {(inputs: Signals_Template_Missing_ScreenshotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till minst en skärmbild som visar modden i spelet.`)
};

const tr_signals_template_missing_screenshots = /** @type {(inputs: Signals_Template_Missing_ScreenshotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lütfen modu oyunda gösteren en az bir ekran görüntüsü ekleyin.`)
};

const zh_signals_template_missing_screenshots = /** @type {(inputs: Signals_Template_Missing_ScreenshotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请至少添加一张展示模组游戏内效果的截图。`)
};

const ja_signals_template_missing_screenshots = /** @type {(inputs: Signals_Template_Missing_ScreenshotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲーム内でMODが動いている様子のスクリーンショットを 1 枚以上追加してください。`)
};

/**
* | output |
* | --- |
* | "Please add at least one screenshot that shows the mod in game." |
*
* @param {Signals_Template_Missing_ScreenshotsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_template_missing_screenshots = /** @type {((inputs?: Signals_Template_Missing_ScreenshotsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Template_Missing_ScreenshotsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_template_missing_screenshots(inputs)
	if (locale === "de") return de_signals_template_missing_screenshots(inputs)
	if (locale === "fr") return fr_signals_template_missing_screenshots(inputs)
	if (locale === "it") return it_signals_template_missing_screenshots(inputs)
	if (locale === "nl") return nl_signals_template_missing_screenshots(inputs)
	if (locale === "pl") return pl_signals_template_missing_screenshots(inputs)
	if (locale === "pt") return pt_signals_template_missing_screenshots(inputs)
	if (locale === "ru") return ru_signals_template_missing_screenshots(inputs)
	if (locale === "sv") return sv_signals_template_missing_screenshots(inputs)
	if (locale === "tr") return tr_signals_template_missing_screenshots(inputs)
	if (locale === "zh") return zh_signals_template_missing_screenshots(inputs)
	if (locale === "ja") return ja_signals_template_missing_screenshots(inputs)
	return en_signals_template_missing_screenshots(inputs)
});
