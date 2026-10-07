/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Game_Builds_FailedInputs */

const en_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The game builds couldn’t be loaded. You can continue and add them later from the mod editor.`)
};

const es_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron cargar las builds del juego. Puedes continuar y añadirlas más tarde desde el editor del mod.`)
};

const de_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Spiel-Builds konnten nicht geladen werden. Du kannst fortfahren und sie später im Mod-Editor ergänzen.`)
};

const fr_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les builds du jeu n’ont pas pu être chargés. Vous pouvez continuer et les ajouter plus tard depuis l’éditeur du mod.`)
};

const it_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare le build del gioco. Puoi continuare e aggiungerle più tardi dall’editor della mod.`)
};

const nl_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De gamebuilds konden niet worden geladen. Je kunt doorgaan en ze later toevoegen in de mod-editor.`)
};

const pl_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać buildów gry. Możesz kontynuować i dodać je później w edytorze moda.`)
};

const pt_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar as builds do jogo. Você pode continuar e adicioná-las depois no editor do mod.`)
};

const ru_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить сборки игры. Можно продолжить и добавить их позже в редакторе мода.`)
};

const sv_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelversionerna kunde inte läsas in. Du kan fortsätta och lägga till dem senare i moddredigeraren.`)
};

const tr_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümleri yüklenemedi. Devam edip daha sonra mod düzenleyicisinden ekleyebilirsin.`)
};

const zh_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载游戏版本。你可以继续，稍后在模组编辑器中添加。`)
};

const ja_upload_game_builds_failed = /** @type {(inputs: Upload_Game_Builds_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームビルドを読み込めませんでした。このまま進み、あとでMODエディターから追加できます。`)
};

/**
* | output |
* | --- |
* | "The game builds couldn’t be loaded. You can continue and add them later from the mod editor." |
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
