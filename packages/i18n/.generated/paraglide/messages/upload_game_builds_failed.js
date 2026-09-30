/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Game_Builds_FailedInputs */

const en_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The game builds couldn’t be loaded. Try again later.`)
};

const es_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron cargar las builds del juego. Inténtalo más tarde.`)
};

const de_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Spiel-Builds konnten nicht geladen werden. Versuch es später erneut.`)
};

const fr_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les builds du jeu n’ont pas pu être chargés. Réessayez plus tard.`)
};

const it_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare le build del gioco. Riprova più tardi.`)
};

const nl_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De gamebuilds konden niet worden geladen. Probeer het later opnieuw.`)
};

const pl_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać buildów gry. Spróbuj później.`)
};

const pt_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar as builds do jogo. Tente mais tarde.`)
};

const ru_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить сборки игры. Попробуйте позже.`)
};

const sv_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelversionerna kunde inte läsas in. Försök igen senare.`)
};

const tr_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümleri yüklenemedi. Daha sonra tekrar dene.`)
};

const zh_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载游戏版本，请稍后再试。`)
};

const ja_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームビルドを読み込めませんでした。あとでもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "The game builds couldn’t be loaded. Try again later." |
*
* @param {Upload_Game_Builds_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_builds_failed = /** @type {((inputs?: Upload_Game_Builds_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_builds_failed(inputs)
	if (locale === "de") return de_upload_game_builds_failed(inputs)
	if (locale === "fr") return fr_upload_game_builds_failed(inputs)
	if (locale === "it") return it_upload_game_builds_failed(inputs)
	if (locale === "nl") return nl_upload_game_builds_failed(inputs)
	if (locale === "pl") return pl_upload_game_builds_failed(inputs)
	if (locale === "pt") return pt_upload_game_builds_failed(inputs)
	if (locale === "ru") return ru_upload_game_builds_failed(inputs)
	if (locale === "sv") return sv_upload_game_builds_failed(inputs)
	if (locale === "tr") return tr_upload_game_builds_failed(inputs)
	if (locale === "zh") return zh_upload_game_builds_failed(inputs)
	if (locale === "ja") return ja_upload_game_builds_failed(inputs)
	return en_upload_game_builds_failed(inputs)
});
