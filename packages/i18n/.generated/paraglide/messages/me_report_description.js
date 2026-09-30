/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown>, build: NonNullable<unknown> }} Me_Report_DescriptionInputs */

const en_me_report_description = /** @type {(inputs: Me_Report_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your field report on version ${i?.version} for game build ${i?.build} helps every survivor pick mods that run.`)
};

const es_me_report_description = /** @type {(inputs: Me_Report_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tu reporte de campo sobre la versión ${i?.version} en la build ${i?.build} del juego ayuda a todos los supervivientes a elegir mods que funcionan.`)
};

const de_me_report_description = /** @type {(inputs: Me_Report_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dein Feldbericht zu Version ${i?.version} auf Spiel-Build ${i?.build} hilft allen Überlebenden, Mods zu finden, die laufen.`)
};

const fr_me_report_description = /** @type {(inputs: Me_Report_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre rapport de terrain sur la version ${i?.version} pour la build ${i?.build} du jeu aide tous les survivants à choisir des mods qui marchent.`)
};

const it_me_report_description = /** @type {(inputs: Me_Report_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il tuo rapporto sul campo sulla versione ${i?.version} per la build ${i?.build} del gioco aiuta tutti i sopravvissuti a scegliere mod che funzionano.`)
};

const nl_me_report_description = /** @type {(inputs: Me_Report_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je veldrapport over versie ${i?.version} op game-build ${i?.build} helpt alle overlevenden mods te kiezen die werken.`)
};

const pl_me_report_description = /** @type {(inputs: Me_Report_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twój raport terenowy o wersji ${i?.version} na buildzie gry ${i?.build} pomaga wszystkim ocalałym wybierać działające mody.`)
};

const pt_me_report_description = /** @type {(inputs: Me_Report_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seu relatório de campo sobre a versão ${i?.version} na build ${i?.build} do jogo ajuda todos os sobreviventes a escolher mods que funcionam.`)
};

const ru_me_report_description = /** @type {(inputs: Me_Report_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ваш полевой отчёт о версии ${i?.version} на сборке игры ${i?.build} помогает всем выжившим выбирать рабочие моды.`)
};

const sv_me_report_description = /** @type {(inputs: Me_Report_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Din fältrapport om version ${i?.version} på spelbygget ${i?.build} hjälper alla överlevare att välja moddar som fungerar.`)
};

const tr_me_report_description = /** @type {(inputs: Me_Report_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} oyun sürümünde ${i?.version} sürümüyle ilgili saha raporun, tüm hayatta kalanların çalışan modları seçmesine yardım eder.`)
};

const zh_me_report_description = /** @type {(inputs: Me_Report_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你关于 ${i?.version} 版在游戏版本 ${i?.build} 上的实地报告，能帮助所有幸存者挑选可用的模组。`)
};

const ja_me_report_description = /** @type {(inputs: Me_Report_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ゲームビルド ${i?.build} でのバージョン ${i?.version} についてのあなたのフィールドレポートは、すべてのサバイバーが動くMODを選ぶ助けになります。`)
};

/**
* | output |
* | --- |
* | "Your field report on version {version} for game build {build} helps every survivor pick mods that run." |
*
* @param {Me_Report_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_description = /** @type {((inputs: Me_Report_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_description(inputs)
	if (locale === "de") return de_me_report_description(inputs)
	if (locale === "fr") return fr_me_report_description(inputs)
	if (locale === "it") return it_me_report_description(inputs)
	if (locale === "nl") return nl_me_report_description(inputs)
	if (locale === "pl") return pl_me_report_description(inputs)
	if (locale === "pt") return pt_me_report_description(inputs)
	if (locale === "ru") return ru_me_report_description(inputs)
	if (locale === "sv") return sv_me_report_description(inputs)
	if (locale === "tr") return tr_me_report_description(inputs)
	if (locale === "zh") return zh_me_report_description(inputs)
	if (locale === "ja") return ja_me_report_description(inputs)
	return en_me_report_description(inputs)
});
