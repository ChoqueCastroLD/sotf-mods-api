/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_DescriptionInputs */

const en_admin_awards_description = /** @type {(inputs: Admin_Awards_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod of the Week, staff picks and the monthly awards. A new award replaces the one of the same kind and period, which is how the automatic Mod of the Week is overridden.`)
};

const es_admin_awards_description = /** @type {(inputs: Admin_Awards_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod de la semana, selecciones del equipo y los premios mensuales. Un premio nuevo sustituye al del mismo tipo y periodo: así se reemplaza el Mod de la semana automático.`)
};

const de_admin_awards_description = /** @type {(inputs: Admin_Awards_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod der Woche, Team-Tipps und die Monatsauszeichnungen. Eine neue Auszeichnung ersetzt die gleicher Art und gleichen Zeitraums – so wird der automatische Mod der Woche überschrieben.`)
};

const fr_admin_awards_description = /** @type {(inputs: Admin_Awards_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod de la semaine, choix de l’équipe et récompenses mensuelles. Une nouvelle récompense remplace celle de même type et de même période : c’est ainsi qu’on remplace le Mod de la semaine automatique.`)
};

const it_admin_awards_description = /** @type {(inputs: Admin_Awards_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod della settimana, scelte dello staff e premi mensili. Un nuovo premio sostituisce quello dello stesso tipo e periodo: così si rimpiazza la Mod della settimana automatica.`)
};

const nl_admin_awards_description = /** @type {(inputs: Admin_Awards_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod van de week, keuzes van het team en de maandprijzen. Een nieuwe prijs vervangt die van hetzelfde soort en dezelfde periode; zo overschrijf je de automatische Mod van de week.`)
};

const pl_admin_awards_description = /** @type {(inputs: Admin_Awards_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod tygodnia, wybory zespołu i wyróżnienia miesięczne. Nowe wyróżnienie zastępuje to samego rodzaju i okresu: tak nadpisuje się automatyczny Mod tygodnia.`)
};

const pt_admin_awards_description = /** @type {(inputs: Admin_Awards_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod da semana, escolhas da equipe e prêmios mensais. Um prêmio novo substitui o do mesmo tipo e período: é assim que se troca o Mod da semana automático.`)
};

const ru_admin_awards_description = /** @type {(inputs: Admin_Awards_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод недели, выбор команды и ежемесячные награды. Новая награда заменяет награду того же типа за тот же период — так переопределяется автоматический Мод недели.`)
};

const sv_admin_awards_description = /** @type {(inputs: Admin_Awards_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veckans modd, teamets val och månadens utmärkelser. En ny utmärkelse ersätter den av samma slag och period – så ersätts den automatiska Veckans modd.`)
};

const tr_admin_awards_description = /** @type {(inputs: Admin_Awards_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haftanın Modu, ekip seçimleri ve aylık ödüller. Yeni bir ödül aynı tür ve dönemdeki ödülün yerini alır: otomatik Haftanın Modu böyle değiştirilir.`)
};

const zh_admin_awards_description = /** @type {(inputs: Admin_Awards_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每周模组、团队精选和月度奖项。新奖项会替换同类型、同时段的奖项——自动评选的每周模组就是这样被替换的。`)
};

const ja_admin_awards_description = /** @type {(inputs: Admin_Awards_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週の MOD、スタッフのおすすめ、月間アワード。同じ種類・同じ期間の新しいアワードは既存のものを置き換えます。自動選出の今週の MOD はこうして差し替えます。`)
};

/**
* | output |
* | --- |
* | "Mod of the Week, staff picks and the monthly awards. A new award replaces the one of the same kind and period, which is how the automatic Mod of the Week is ..." |
*
* @param {Admin_Awards_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_description = /** @type {((inputs?: Admin_Awards_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_description(inputs)
	if (locale === "de") return de_admin_awards_description(inputs)
	if (locale === "fr") return fr_admin_awards_description(inputs)
	if (locale === "it") return it_admin_awards_description(inputs)
	if (locale === "nl") return nl_admin_awards_description(inputs)
	if (locale === "pl") return pl_admin_awards_description(inputs)
	if (locale === "pt") return pt_admin_awards_description(inputs)
	if (locale === "ru") return ru_admin_awards_description(inputs)
	if (locale === "sv") return sv_admin_awards_description(inputs)
	if (locale === "tr") return tr_admin_awards_description(inputs)
	if (locale === "zh") return zh_admin_awards_description(inputs)
	if (locale === "ja") return ja_admin_awards_description(inputs)
	return en_admin_awards_description(inputs)
});
