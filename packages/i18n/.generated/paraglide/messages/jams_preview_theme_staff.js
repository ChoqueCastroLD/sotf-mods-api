/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ theme: NonNullable<unknown> }} Jams_Preview_Theme_StaffInputs */

const en_jams_preview_theme_staff = /** @type {(inputs: Jams_Preview_Theme_StaffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Only staff see the real theme for now: ${i?.theme}`)
};

const es_jams_preview_theme_staff = /** @type {(inputs: Jams_Preview_Theme_StaffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Por ahora solo el equipo ve el tema real: ${i?.theme}`)
};

const de_jams_preview_theme_staff = /** @type {(inputs: Jams_Preview_Theme_StaffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nur das Team sieht das echte Thema vorerst: ${i?.theme}`)
};

const fr_jams_preview_theme_staff = /** @type {(inputs: Jams_Preview_Theme_StaffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pour l’instant seule l’équipe voit le vrai thème : ${i?.theme}`)
};

const it_jams_preview_theme_staff = /** @type {(inputs: Jams_Preview_Theme_StaffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Per ora solo lo staff vede il tema reale: ${i?.theme}`)
};

const nl_jams_preview_theme_staff = /** @type {(inputs: Jams_Preview_Theme_StaffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Voorlopig ziet alleen het team het echte thema: ${i?.theme}`)
};

const pl_jams_preview_theme_staff = /** @type {(inputs: Jams_Preview_Theme_StaffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Na razie prawdziwy temat widzi tylko zespół: ${i?.theme}`)
};

const pt_jams_preview_theme_staff = /** @type {(inputs: Jams_Preview_Theme_StaffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Por enquanto só a equipe vê o tema real: ${i?.theme}`)
};

const ru_jams_preview_theme_staff = /** @type {(inputs: Jams_Preview_Theme_StaffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Пока настоящую тему видит только команда: ${i?.theme}`)
};

const sv_jams_preview_theme_staff = /** @type {(inputs: Jams_Preview_Theme_StaffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Än så länge ser bara personalen det riktiga temat: ${i?.theme}`)
};

const tr_jams_preview_theme_staff = /** @type {(inputs: Jams_Preview_Theme_StaffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Şimdilik gerçek temayı yalnızca ekip görür: ${i?.theme}`)
};

const zh_jams_preview_theme_staff = /** @type {(inputs: Jams_Preview_Theme_StaffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`目前只有工作人员能看到真实主题：${i?.theme}`)
};

const ja_jams_preview_theme_staff = /** @type {(inputs: Jams_Preview_Theme_StaffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`現時点で本当のテーマが見えるのはスタッフのみです: ${i?.theme}`)
};

/**
* | output |
* | --- |
* | "Only staff see the real theme for now: {theme}" |
*
* @param {Jams_Preview_Theme_StaffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_preview_theme_staff = /** @type {((inputs: Jams_Preview_Theme_StaffInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Preview_Theme_StaffInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_preview_theme_staff(inputs)
	if (locale === "de") return de_jams_preview_theme_staff(inputs)
	if (locale === "fr") return fr_jams_preview_theme_staff(inputs)
	if (locale === "it") return it_jams_preview_theme_staff(inputs)
	if (locale === "nl") return nl_jams_preview_theme_staff(inputs)
	if (locale === "pl") return pl_jams_preview_theme_staff(inputs)
	if (locale === "pt") return pt_jams_preview_theme_staff(inputs)
	if (locale === "ru") return ru_jams_preview_theme_staff(inputs)
	if (locale === "sv") return sv_jams_preview_theme_staff(inputs)
	if (locale === "tr") return tr_jams_preview_theme_staff(inputs)
	if (locale === "zh") return zh_jams_preview_theme_staff(inputs)
	if (locale === "ja") return ja_jams_preview_theme_staff(inputs)
	return en_jams_preview_theme_staff(inputs)
});
