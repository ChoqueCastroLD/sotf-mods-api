/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Missing_SetupInputs */

const en_social_compat_missing_setup = /** @type {(inputs: Social_Compat_Missing_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose the version and the game build.`)
};

const es_social_compat_missing_setup = /** @type {(inputs: Social_Compat_Missing_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige la versión y la versión del juego.`)
};

const de_social_compat_missing_setup = /** @type {(inputs: Social_Compat_Missing_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle die Version und den Spiel-Build.`)
};

const fr_social_compat_missing_setup = /** @type {(inputs: Social_Compat_Missing_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez la version et la version du jeu.`)
};

const it_social_compat_missing_setup = /** @type {(inputs: Social_Compat_Missing_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli la versione e la build del gioco.`)
};

const nl_social_compat_missing_setup = /** @type {(inputs: Social_Compat_Missing_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies de versie en de gamebuild.`)
};

const pl_social_compat_missing_setup = /** @type {(inputs: Social_Compat_Missing_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz wersję moda i wersję gry.`)
};

const pt_social_compat_missing_setup = /** @type {(inputs: Social_Compat_Missing_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha a versão e o build do jogo.`)
};

const ru_social_compat_missing_setup = /** @type {(inputs: Social_Compat_Missing_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите версию мода и сборку игры.`)
};

const sv_social_compat_missing_setup = /** @type {(inputs: Social_Compat_Missing_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj version och spelversion.`)
};

const tr_social_compat_missing_setup = /** @type {(inputs: Social_Compat_Missing_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürümü ve oyun sürümünü seç.`)
};

const zh_social_compat_missing_setup = /** @type {(inputs: Social_Compat_Missing_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择模组版本和游戏版本。`)
};

const ja_social_compat_missing_setup = /** @type {(inputs: Social_Compat_Missing_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンとゲームのビルドを選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose the version and the game build." |
*
* @param {Social_Compat_Missing_SetupInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_missing_setup = /** @type {((inputs?: Social_Compat_Missing_SetupInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Missing_SetupInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_missing_setup(inputs)
	if (locale === "de") return de_social_compat_missing_setup(inputs)
	if (locale === "fr") return fr_social_compat_missing_setup(inputs)
	if (locale === "it") return it_social_compat_missing_setup(inputs)
	if (locale === "nl") return nl_social_compat_missing_setup(inputs)
	if (locale === "pl") return pl_social_compat_missing_setup(inputs)
	if (locale === "pt") return pt_social_compat_missing_setup(inputs)
	if (locale === "ru") return ru_social_compat_missing_setup(inputs)
	if (locale === "sv") return sv_social_compat_missing_setup(inputs)
	if (locale === "tr") return tr_social_compat_missing_setup(inputs)
	if (locale === "zh") return zh_social_compat_missing_setup(inputs)
	if (locale === "ja") return ja_social_compat_missing_setup(inputs)
	return en_social_compat_missing_setup(inputs)
});
