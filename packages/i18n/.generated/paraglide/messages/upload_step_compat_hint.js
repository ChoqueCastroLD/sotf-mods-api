/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_Compat_HintInputs */

const en_upload_step_compat_hint = /** @type {(inputs: Upload_Step_Compat_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds, multiplayer, dependencies`)
};

const es_upload_step_compat_hint = /** @type {(inputs: Upload_Step_Compat_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds, multijugador, dependencias`)
};

const de_upload_step_compat_hint = /** @type {(inputs: Upload_Step_Compat_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds, Mehrspieler, Abhängigkeiten`)
};

const fr_upload_step_compat_hint = /** @type {(inputs: Upload_Step_Compat_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds, multijoueur, dépendances`)
};

const it_upload_step_compat_hint = /** @type {(inputs: Upload_Step_Compat_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build, multigiocatore, dipendenze`)
};

const nl_upload_step_compat_hint = /** @type {(inputs: Upload_Step_Compat_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds, multiplayer, afhankelijkheden`)
};

const pl_upload_step_compat_hint = /** @type {(inputs: Upload_Step_Compat_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildy, tryb wieloosobowy, zależności`)
};

const pt_upload_step_compat_hint = /** @type {(inputs: Upload_Step_Compat_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds, multijogador, dependências`)
};

const ru_upload_step_compat_hint = /** @type {(inputs: Upload_Step_Compat_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сборки игры, мультиплеер, зависимости`)
};

const sv_upload_step_compat_hint = /** @type {(inputs: Upload_Step_Compat_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelversioner, flerspelare, beroenden`)
};

const tr_upload_step_compat_hint = /** @type {(inputs: Upload_Step_Compat_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümleri, çok oyunculu, bağımlılıklar`)
};

const zh_upload_step_compat_hint = /** @type {(inputs: Upload_Step_Compat_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏版本、多人、依赖`)
};

const ja_upload_step_compat_hint = /** @type {(inputs: Upload_Step_Compat_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームビルド、マルチプレイ、依存関係`)
};

/**
* | output |
* | --- |
* | "Builds, multiplayer, dependencies" |
*
* @param {Upload_Step_Compat_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_compat_hint = /** @type {((inputs?: Upload_Step_Compat_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_Compat_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_compat_hint(inputs)
	if (locale === "de") return de_upload_step_compat_hint(inputs)
	if (locale === "fr") return fr_upload_step_compat_hint(inputs)
	if (locale === "it") return it_upload_step_compat_hint(inputs)
	if (locale === "nl") return nl_upload_step_compat_hint(inputs)
	if (locale === "pl") return pl_upload_step_compat_hint(inputs)
	if (locale === "pt") return pt_upload_step_compat_hint(inputs)
	if (locale === "ru") return ru_upload_step_compat_hint(inputs)
	if (locale === "sv") return sv_upload_step_compat_hint(inputs)
	if (locale === "tr") return tr_upload_step_compat_hint(inputs)
	if (locale === "zh") return zh_upload_step_compat_hint(inputs)
	if (locale === "ja") return ja_upload_step_compat_hint(inputs)
	return en_upload_step_compat_hint(inputs)
});
