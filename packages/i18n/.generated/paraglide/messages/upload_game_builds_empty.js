/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Game_Builds_EmptyInputs */

const en_upload_game_builds_empty = /** @type {(inputs: Upload_Game_Builds_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No game builds are registered yet. You can continue and add the builds you tested later from the mod editor.`)
};

const es_upload_game_builds_empty = /** @type {(inputs: Upload_Game_Builds_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay builds del juego registradas. Puedes continuar y añadir las que probaste más tarde desde el editor del mod.`)
};

const de_upload_game_builds_empty = /** @type {(inputs: Upload_Game_Builds_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es sind noch keine Spiel-Builds erfasst. Du kannst fortfahren und die getesteten Builds später im Mod-Editor ergänzen.`)
};

const fr_upload_game_builds_empty = /** @type {(inputs: Upload_Game_Builds_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun build du jeu n’est encore enregistré. Vous pouvez continuer et ajouter ceux que vous avez testés plus tard depuis l’éditeur du mod.`)
};

const it_upload_game_builds_empty = /** @type {(inputs: Upload_Game_Builds_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ci sono ancora build del gioco registrate. Puoi continuare e aggiungere quelle che hai provato più tardi dall’editor della mod.`)
};

const nl_upload_game_builds_empty = /** @type {(inputs: Upload_Game_Builds_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er zijn nog geen gamebuilds geregistreerd. Je kunt doorgaan en de builds die je hebt getest later toevoegen in de mod-editor.`)
};

const pl_upload_game_builds_empty = /** @type {(inputs: Upload_Game_Builds_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie zarejestrowano jeszcze żadnych buildów gry. Możesz kontynuować i dodać przetestowane buildy później w edytorze moda.`)
};

const pt_upload_game_builds_empty = /** @type {(inputs: Upload_Game_Builds_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há builds do jogo registradas. Você pode continuar e adicionar as que testou depois no editor do mod.`)
};

const ru_upload_game_builds_empty = /** @type {(inputs: Upload_Game_Builds_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сборки игры пока не зарегистрированы. Можно продолжить и добавить проверенные сборки позже в редакторе мода.`)
};

const sv_upload_game_builds_empty = /** @type {(inputs: Upload_Game_Builds_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga spelversioner har registrerats ännu. Du kan fortsätta och lägga till de du testade senare i moddredigeraren.`)
};

const tr_upload_game_builds_empty = /** @type {(inputs: Upload_Game_Builds_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz kayıtlı oyun sürümü yok. Devam edip test ettiğin sürümleri daha sonra mod düzenleyicisinden ekleyebilirsin.`)
};

const zh_upload_game_builds_empty = /** @type {(inputs: Upload_Game_Builds_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂时还没有登记的游戏版本。你可以继续，稍后在模组编辑器中添加你测试过的版本。`)
};

const ja_upload_game_builds_empty = /** @type {(inputs: Upload_Game_Builds_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登録済みのゲームビルドはまだありません。このまま進み、確認したビルドはあとでMODエディターから追加できます。`)
};

/**
* | output |
* | --- |
* | "No game builds are registered yet. You can continue and add the builds you tested later from the mod editor." |
*
* @param {Upload_Game_Builds_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_builds_empty = /** @type {((inputs?: Upload_Game_Builds_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_builds_empty(inputs)
	if (locale === "de") return de_upload_game_builds_empty(inputs)
	if (locale === "fr") return fr_upload_game_builds_empty(inputs)
	if (locale === "it") return it_upload_game_builds_empty(inputs)
	if (locale === "nl") return nl_upload_game_builds_empty(inputs)
	if (locale === "pl") return pl_upload_game_builds_empty(inputs)
	if (locale === "pt") return pt_upload_game_builds_empty(inputs)
	if (locale === "ru") return ru_upload_game_builds_empty(inputs)
	if (locale === "sv") return sv_upload_game_builds_empty(inputs)
	if (locale === "tr") return tr_upload_game_builds_empty(inputs)
	if (locale === "zh") return zh_upload_game_builds_empty(inputs)
	if (locale === "ja") return ja_upload_game_builds_empty(inputs)
	return en_upload_game_builds_empty(inputs)
});
