/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_Point_ContentInputs */

const en_settings_delete_point_content = /** @type {(inputs: Settings_Delete_Point_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your comments and reviews stay, signed as «Deleted survivor».`)
};

const es_settings_delete_point_content = /** @type {(inputs: Settings_Delete_Point_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus comentarios y reseñas se quedan, firmados como «Superviviente eliminado».`)
};

const de_settings_delete_point_content = /** @type {(inputs: Settings_Delete_Point_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Kommentare und Bewertungen bleiben, unterzeichnet mit „Gelöschter Überlebender“.`)
};

const fr_settings_delete_point_content = /** @type {(inputs: Settings_Delete_Point_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos commentaires et avis restent, signés « Survivant supprimé ».`)
};

const it_settings_delete_point_content = /** @type {(inputs: Settings_Delete_Point_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi commenti e recensioni restano, firmati «Sopravvissuto eliminato».`)
};

const nl_settings_delete_point_content = /** @type {(inputs: Settings_Delete_Point_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je reacties en reviews blijven staan, ondertekend als ‘Verwijderde overlevende’.`)
};

const pl_settings_delete_point_content = /** @type {(inputs: Settings_Delete_Point_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje komentarze i recenzje zostają, podpisane jako „Usunięty ocalały”.`)
};

const pt_settings_delete_point_content = /** @type {(inputs: Settings_Delete_Point_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus comentários e avaliações continuam, assinados como “Sobrevivente excluído”.`)
};

const ru_settings_delete_point_content = /** @type {(inputs: Settings_Delete_Point_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши комментарии и отзывы останутся с подписью «Удалённый выживший».`)
};

const sv_settings_delete_point_content = /** @type {(inputs: Settings_Delete_Point_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina kommentarer och recensioner finns kvar, signerade ”Raderad överlevare”.`)
};

const tr_settings_delete_point_content = /** @type {(inputs: Settings_Delete_Point_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumların ve incelemelerin “Silinmiş hayatta kalan” imzasıyla kalır.`)
};

const zh_settings_delete_point_content = /** @type {(inputs: Settings_Delete_Point_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的评论和评价会保留，署名为“已删除的幸存者”。`)
};

const ja_settings_delete_point_content = /** @type {(inputs: Settings_Delete_Point_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントとレビューは「削除されたサバイバー」として残ります。`)
};

/**
* | output |
* | --- |
* | "Your comments and reviews stay, signed as «Deleted survivor»." |
*
* @param {Settings_Delete_Point_ContentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_point_content = /** @type {((inputs?: Settings_Delete_Point_ContentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Point_ContentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_point_content(inputs)
	if (locale === "de") return de_settings_delete_point_content(inputs)
	if (locale === "fr") return fr_settings_delete_point_content(inputs)
	if (locale === "it") return it_settings_delete_point_content(inputs)
	if (locale === "nl") return nl_settings_delete_point_content(inputs)
	if (locale === "pl") return pl_settings_delete_point_content(inputs)
	if (locale === "pt") return pt_settings_delete_point_content(inputs)
	if (locale === "ru") return ru_settings_delete_point_content(inputs)
	if (locale === "sv") return sv_settings_delete_point_content(inputs)
	if (locale === "tr") return tr_settings_delete_point_content(inputs)
	if (locale === "zh") return zh_settings_delete_point_content(inputs)
	if (locale === "ja") return ja_settings_delete_point_content(inputs)
	return en_settings_delete_point_content(inputs)
});
