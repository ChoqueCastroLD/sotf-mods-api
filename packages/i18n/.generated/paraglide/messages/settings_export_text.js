/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Export_TextInputs */

const en_settings_export_text = /** @type {(inputs: Settings_Export_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A ZIP of JSON files with your account, profile, mods, comments, reviews, kits, follows and settings.`)
};

const es_settings_export_text = /** @type {(inputs: Settings_Export_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un ZIP de archivos JSON con tu cuenta, perfil, mods, comentarios, reseñas, kits, seguimientos y ajustes.`)
};

const de_settings_export_text = /** @type {(inputs: Settings_Export_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein ZIP mit JSON-Dateien zu deinem Konto, Profil, deinen Mods, Kommentaren, Bewertungen, Kits, Follows und Einstellungen.`)
};

const fr_settings_export_text = /** @type {(inputs: Settings_Export_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un ZIP de fichiers JSON avec votre compte, profil, mods, commentaires, avis, kits, abonnements et paramètres.`)
};

const it_settings_export_text = /** @type {(inputs: Settings_Export_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uno ZIP di file JSON con account, profilo, mod, commenti, recensioni, kit, elementi seguiti e impostazioni.`)
};

const nl_settings_export_text = /** @type {(inputs: Settings_Export_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een ZIP met JSON-bestanden over je account, profiel, mods, reacties, reviews, kits, gevolgde items en instellingen.`)
};

const pl_settings_export_text = /** @type {(inputs: Settings_Export_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ZIP z plikami JSON: konto, profil, mody, komentarze, recenzje, zestawy, obserwowane i ustawienia.`)
};

const pt_settings_export_text = /** @type {(inputs: Settings_Export_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um ZIP de arquivos JSON com sua conta, perfil, mods, comentários, avaliações, kits, itens seguidos e configurações.`)
};

const ru_settings_export_text = /** @type {(inputs: Settings_Export_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ZIP с JSON-файлами: аккаунт, профиль, моды, комментарии, отзывы, наборы, подписки и настройки.`)
};

const sv_settings_export_text = /** @type {(inputs: Settings_Export_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En ZIP med JSON-filer om ditt konto, din profil, dina moddar, kommentarer, recensioner, kit, följningar och inställningar.`)
};

const tr_settings_export_text = /** @type {(inputs: Settings_Export_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabın, profilin, modların, yorumların, incelemelerin, kitlerin, takiplerin ve ayarlarınla JSON dosyalarından oluşan bir ZIP.`)
};

const zh_settings_export_text = /** @type {(inputs: Settings_Export_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一个包含 JSON 文件的 ZIP：账户、个人资料、模组、评论、评价、套装、关注和设置。`)
};

const ja_settings_export_text = /** @type {(inputs: Settings_Export_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウント、プロフィール、MOD、コメント、レビュー、キット、フォロー、設定を含む JSON ファイルの ZIP。`)
};

/**
* | output |
* | --- |
* | "A ZIP of JSON files with your account, profile, mods, comments, reviews, kits, follows and settings." |
*
* @param {Settings_Export_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_text = /** @type {((inputs?: Settings_Export_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_text(inputs)
	if (locale === "de") return de_settings_export_text(inputs)
	if (locale === "fr") return fr_settings_export_text(inputs)
	if (locale === "it") return it_settings_export_text(inputs)
	if (locale === "nl") return nl_settings_export_text(inputs)
	if (locale === "pl") return pl_settings_export_text(inputs)
	if (locale === "pt") return pt_settings_export_text(inputs)
	if (locale === "ru") return ru_settings_export_text(inputs)
	if (locale === "sv") return sv_settings_export_text(inputs)
	if (locale === "tr") return tr_settings_export_text(inputs)
	if (locale === "zh") return zh_settings_export_text(inputs)
	if (locale === "ja") return ja_settings_export_text(inputs)
	return en_settings_export_text(inputs)
});
