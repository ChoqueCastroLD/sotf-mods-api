/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown>, share: NonNullable<unknown>, works: NonNullable<unknown>, broken: NonNullable<unknown>, pending: NonNullable<unknown> }} Content_Radar_DescriptionInputs */

const en_content_radar_description = /** @type {(inputs: Content_Radar_DescriptionInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("en", i?.works, {});
	const broken__number = registry.number("en", i?.broken, {});
	const pending__number = registry.number("en", i?.pending, {});return /** @type {LocalizedString} */ (`Patch ${i?.build}: ${i?.share} of the 50 most downloaded Sons of the Forest mods confirmed by players — ${works__number} working, ${broken__number} broken, ${pending__number} waiting for reports.`)
};

const es_content_radar_description = /** @type {(inputs: Content_Radar_DescriptionInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("es", i?.works, {});
	const broken__number = registry.number("es", i?.broken, {});
	const pending__number = registry.number("es", i?.pending, {});return /** @type {LocalizedString} */ (`Parche ${i?.build}: ${i?.share} de los 50 mods más descargados de Sons of the Forest confirmados por jugadores: ${works__number} funcionan, ${broken__number} rotos y ${pending__number} esperan reportes.`)
};

const de_content_radar_description = /** @type {(inputs: Content_Radar_DescriptionInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("de", i?.works, {});
	const broken__number = registry.number("de", i?.broken, {});
	const pending__number = registry.number("de", i?.pending, {});return /** @type {LocalizedString} */ (`Patch ${i?.build}: ${i?.share} der 50 meistgeladenen Sons-of-the-Forest-Mods von Spielern bestätigt – ${works__number} funktionieren, ${broken__number} kaputt, ${pending__number} warten auf Berichte.`)
};

const fr_content_radar_description = /** @type {(inputs: Content_Radar_DescriptionInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("fr", i?.works, {});
	const broken__number = registry.number("fr", i?.broken, {});
	const pending__number = registry.number("fr", i?.pending, {});return /** @type {LocalizedString} */ (`Patch ${i?.build} : ${i?.share} des 50 mods Sons of the Forest les plus téléchargés confirmés par les joueurs — ${works__number} fonctionnent, ${broken__number} cassés, ${pending__number} en attente de rapports.`)
};

const it_content_radar_description = /** @type {(inputs: Content_Radar_DescriptionInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("it", i?.works, {});
	const broken__number = registry.number("it", i?.broken, {});
	const pending__number = registry.number("it", i?.pending, {});return /** @type {LocalizedString} */ (`Patch ${i?.build}: ${i?.share} delle 50 mod di Sons of the Forest più scaricate confermate dai giocatori — ${works__number} funzionano, ${broken__number} rotte, ${pending__number} in attesa di segnalazioni.`)
};

const nl_content_radar_description = /** @type {(inputs: Content_Radar_DescriptionInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("nl", i?.works, {});
	const broken__number = registry.number("nl", i?.broken, {});
	const pending__number = registry.number("nl", i?.pending, {});return /** @type {LocalizedString} */ (`Patch ${i?.build}: ${i?.share} van de 50 meest gedownloade Sons of the Forest-mods bevestigd door spelers — ${works__number} werken, ${broken__number} kapot, ${pending__number} wachten op meldingen.`)
};

const pl_content_radar_description = /** @type {(inputs: Content_Radar_DescriptionInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("pl", i?.works, {});
	const broken__number = registry.number("pl", i?.broken, {});
	const pending__number = registry.number("pl", i?.pending, {});return /** @type {LocalizedString} */ (`Łatka ${i?.build}: ${i?.share} z 50 najczęściej pobieranych modów do Sons of the Forest potwierdzonych przez graczy — działa: ${works__number}, zepsute: ${broken__number}, czeka na zgłoszenia: ${pending__number}.`)
};

const pt_content_radar_description = /** @type {(inputs: Content_Radar_DescriptionInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("pt", i?.works, {});
	const broken__number = registry.number("pt", i?.broken, {});
	const pending__number = registry.number("pt", i?.pending, {});return /** @type {LocalizedString} */ (`Patch ${i?.build}: ${i?.share} dos 50 mods de Sons of the Forest mais baixados confirmados pelos jogadores — ${works__number} funcionam, ${broken__number} quebrados, ${pending__number} aguardando relatos.`)
};

const ru_content_radar_description = /** @type {(inputs: Content_Radar_DescriptionInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("ru", i?.works, {});
	const broken__number = registry.number("ru", i?.broken, {});
	const pending__number = registry.number("ru", i?.pending, {});return /** @type {LocalizedString} */ (`Патч ${i?.build}: игроки подтвердили ${i?.share} из 50 самых скачиваемых модов Sons of the Forest — работают: ${works__number}, сломаны: ${broken__number}, ждут отчётов: ${pending__number}.`)
};

const sv_content_radar_description = /** @type {(inputs: Content_Radar_DescriptionInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("sv", i?.works, {});
	const broken__number = registry.number("sv", i?.broken, {});
	const pending__number = registry.number("sv", i?.pending, {});return /** @type {LocalizedString} */ (`Patch ${i?.build}: ${i?.share} av de 50 mest nedladdade Sons of the Forest-moddarna bekräftade av spelare – ${works__number} fungerar, ${broken__number} trasiga, ${pending__number} väntar på rapporter.`)
};

const tr_content_radar_description = /** @type {(inputs: Content_Radar_DescriptionInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("tr", i?.works, {});
	const broken__number = registry.number("tr", i?.broken, {});
	const pending__number = registry.number("tr", i?.pending, {});return /** @type {LocalizedString} */ (`${i?.build} yaması: en çok indirilen 50 Sons of the Forest modunun ${i?.share} kadarı oyuncular tarafından doğrulandı — ${works__number} çalışıyor, ${broken__number} bozuk, ${pending__number} rapor bekliyor.`)
};

const zh_content_radar_description = /** @type {(inputs: Content_Radar_DescriptionInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("zh", i?.works, {});
	const broken__number = registry.number("zh", i?.broken, {});
	const pending__number = registry.number("zh", i?.pending, {});return /** @type {LocalizedString} */ (`${i?.build} 补丁：下载量前 50 的 Sons of the Forest 模组中有 ${i?.share} 已由玩家确认——${works__number} 个可用，${broken__number} 个失效，${pending__number} 个等待报告。`)
};

const ja_content_radar_description = /** @type {(inputs: Content_Radar_DescriptionInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("ja", i?.works, {});
	const broken__number = registry.number("ja", i?.broken, {});
	const pending__number = registry.number("ja", i?.pending, {});return /** @type {LocalizedString} */ (`パッチ ${i?.build}：ダウンロード数上位 50 の Sons of the Forest MOD のうち ${i?.share} をプレイヤーが確認済み — 動作 ${works__number}、不具合 ${broken__number}、報告待ち ${pending__number}。`)
};

/**
* | output |
* | --- |
* | "Patch {build}: {share} of the 50 most downloaded Sons of the Forest mods confirmed by players — {works__number} working, {broken__number} broken, {pending__n..." |
*
* @param {Content_Radar_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_description = /** @type {((inputs: Content_Radar_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_description(inputs)
	if (locale === "de") return de_content_radar_description(inputs)
	if (locale === "fr") return fr_content_radar_description(inputs)
	if (locale === "it") return it_content_radar_description(inputs)
	if (locale === "nl") return nl_content_radar_description(inputs)
	if (locale === "pl") return pl_content_radar_description(inputs)
	if (locale === "pt") return pt_content_radar_description(inputs)
	if (locale === "ru") return ru_content_radar_description(inputs)
	if (locale === "sv") return sv_content_radar_description(inputs)
	if (locale === "tr") return tr_content_radar_description(inputs)
	if (locale === "zh") return zh_content_radar_description(inputs)
	if (locale === "ja") return ja_content_radar_description(inputs)
	return en_content_radar_description(inputs)
});
