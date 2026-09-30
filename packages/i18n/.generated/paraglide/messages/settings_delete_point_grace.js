/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_Point_GraceInputs */

const en_settings_delete_point_grace = /** @type {(inputs: Settings_Delete_Point_GraceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have 14 days to change your mind; signing in and cancelling here stops it.`)
};

const es_settings_delete_point_grace = /** @type {(inputs: Settings_Delete_Point_GraceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tienes 14 días para cambiar de opinión; si inicias sesión y lo cancelas aquí, se detiene.`)
};

const de_settings_delete_point_grace = /** @type {(inputs: Settings_Delete_Point_GraceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast 14 Tage Zeit, es dir anders zu überlegen; melde dich an und brich es hier ab.`)
};

const fr_settings_delete_point_grace = /** @type {(inputs: Settings_Delete_Point_GraceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez 14 jours pour changer d’avis : connectez-vous et annulez ici pour l’arrêter.`)
};

const it_settings_delete_point_grace = /** @type {(inputs: Settings_Delete_Point_GraceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai 14 giorni per cambiare idea: accedi e annulla qui per fermarla.`)
};

const nl_settings_delete_point_grace = /** @type {(inputs: Settings_Delete_Point_GraceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt 14 dagen om je te bedenken; log in en annuleer hier om het te stoppen.`)
};

const pl_settings_delete_point_grace = /** @type {(inputs: Settings_Delete_Point_GraceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masz 14 dni na zmianę zdania; zaloguj się i anuluj tutaj, aby to zatrzymać.`)
};

const pt_settings_delete_point_grace = /** @type {(inputs: Settings_Delete_Point_GraceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você tem 14 dias para mudar de ideia; entre e cancele aqui para interromper.`)
};

const ru_settings_delete_point_grace = /** @type {(inputs: Settings_Delete_Point_GraceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У вас есть 14 дней, чтобы передумать: войдите и отмените удаление здесь.`)
};

const sv_settings_delete_point_grace = /** @type {(inputs: Settings_Delete_Point_GraceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har 14 dagar på dig att ångra dig; logga in och avbryt här för att stoppa det.`)
};

const tr_settings_delete_point_grace = /** @type {(inputs: Settings_Delete_Point_GraceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fikrini değiştirmek için 14 günün var; durdurmak için giriş yap ve buradan iptal et.`)
};

const zh_settings_delete_point_grace = /** @type {(inputs: Settings_Delete_Point_GraceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你有 14 天时间改变主意；登录并在这里取消即可终止。`)
};

const ja_settings_delete_point_grace = /** @type {(inputs: Settings_Delete_Point_GraceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`14 日以内なら取り消せます。ログインしてこのページで取り消してください。`)
};

/**
* | output |
* | --- |
* | "You have 14 days to change your mind; signing in and cancelling here stops it." |
*
* @param {Settings_Delete_Point_GraceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_point_grace = /** @type {((inputs?: Settings_Delete_Point_GraceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Point_GraceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_point_grace(inputs)
	if (locale === "de") return de_settings_delete_point_grace(inputs)
	if (locale === "fr") return fr_settings_delete_point_grace(inputs)
	if (locale === "it") return it_settings_delete_point_grace(inputs)
	if (locale === "nl") return nl_settings_delete_point_grace(inputs)
	if (locale === "pl") return pl_settings_delete_point_grace(inputs)
	if (locale === "pt") return pt_settings_delete_point_grace(inputs)
	if (locale === "ru") return ru_settings_delete_point_grace(inputs)
	if (locale === "sv") return sv_settings_delete_point_grace(inputs)
	if (locale === "tr") return tr_settings_delete_point_grace(inputs)
	if (locale === "zh") return zh_settings_delete_point_grace(inputs)
	if (locale === "ja") return ja_settings_delete_point_grace(inputs)
	return en_settings_delete_point_grace(inputs)
});
