/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Empty_TextInputs */

const en_content_radar_empty_text = /** @type {(inputs: Content_Radar_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No game build has been registered yet. As soon as the rangers log the current patch, this page shows which popular mods work on it.`)
};

const es_content_radar_empty_text = /** @type {(inputs: Content_Radar_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no se ha registrado ninguna build del juego. En cuanto los guardabosques registren el parche actual, esta página mostrará qué mods populares funcionan en él.`)
};

const de_content_radar_empty_text = /** @type {(inputs: Content_Radar_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es wurde noch kein Spiel-Build erfasst. Sobald die Ranger den aktuellen Patch eintragen, zeigt diese Seite, welche beliebten Mods damit funktionieren.`)
};

const fr_content_radar_empty_text = /** @type {(inputs: Content_Radar_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun build du jeu n’a encore été enregistré. Dès que les rangers auront saisi le patch actuel, cette page montrera quels mods populaires fonctionnent dessus.`)
};

const it_content_radar_empty_text = /** @type {(inputs: Content_Radar_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è ancora stata registrata nessuna build del gioco. Appena i ranger registreranno la patch attuale, questa pagina mostrerà quali mod popolari funzionano.`)
};

const nl_content_radar_empty_text = /** @type {(inputs: Content_Radar_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is nog geen gamebuild geregistreerd. Zodra de rangers de huidige patch vastleggen, laat deze pagina zien welke populaire mods erop werken.`)
};

const pl_content_radar_empty_text = /** @type {(inputs: Content_Radar_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie zarejestrowano jeszcze żadnego buildu gry. Gdy strażnicy zapiszą obecną łatkę, ta strona pokaże, które popularne mody na niej działają.`)
};

const pt_content_radar_empty_text = /** @type {(inputs: Content_Radar_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma build do jogo foi registrada ainda. Assim que os guardas registrarem o patch atual, esta página mostrará quais mods populares funcionam nele.`)
};

const ru_content_radar_empty_text = /** @type {(inputs: Content_Radar_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ещё не зарегистрировано ни одной сборки игры. Как только рейнджеры внесут текущий патч, на этой странице появится, какие популярные моды на нём работают.`)
};

const sv_content_radar_empty_text = /** @type {(inputs: Content_Radar_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen spelbuild har registrerats än. Så snart rangers lägger in den aktuella patchen visar sidan vilka populära moddar som fungerar på den.`)
};

const tr_content_radar_empty_text = /** @type {(inputs: Content_Radar_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz hiçbir oyun sürümü kaydedilmedi. Korucular güncel yamayı girer girmez bu sayfa hangi popüler modların çalıştığını gösterecek.`)
};

const zh_content_radar_empty_text = /** @type {(inputs: Content_Radar_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有登记任何游戏版本。护林员登记当前补丁后，本页会显示哪些热门模组可以运行。`)
};

const ja_content_radar_empty_text = /** @type {(inputs: Content_Radar_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームのビルドはまだ登録されていません。レンジャーが現在のパッチを登録すると、このページに動作する人気 MOD が表示されます。`)
};

/**
* | output |
* | --- |
* | "No game build has been registered yet. As soon as the rangers log the current patch, this page shows which popular mods work on it." |
*
* @param {Content_Radar_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_empty_text = /** @type {((inputs?: Content_Radar_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_empty_text(inputs)
	if (locale === "de") return de_content_radar_empty_text(inputs)
	if (locale === "fr") return fr_content_radar_empty_text(inputs)
	if (locale === "it") return it_content_radar_empty_text(inputs)
	if (locale === "nl") return nl_content_radar_empty_text(inputs)
	if (locale === "pl") return pl_content_radar_empty_text(inputs)
	if (locale === "pt") return pt_content_radar_empty_text(inputs)
	if (locale === "ru") return ru_content_radar_empty_text(inputs)
	if (locale === "sv") return sv_content_radar_empty_text(inputs)
	if (locale === "tr") return tr_content_radar_empty_text(inputs)
	if (locale === "zh") return zh_content_radar_empty_text(inputs)
	if (locale === "ja") return ja_content_radar_empty_text(inputs)
	return en_content_radar_empty_text(inputs)
});
