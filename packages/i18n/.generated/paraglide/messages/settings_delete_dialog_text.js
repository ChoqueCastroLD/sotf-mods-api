/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_Dialog_TextInputs */

const en_settings_delete_dialog_text = /** @type {(inputs: Settings_Delete_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your account is deleted in 14 days. Until then you can cancel from this page.`)
};

const es_settings_delete_dialog_text = /** @type {(inputs: Settings_Delete_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu cuenta se borrará dentro de 14 días. Hasta entonces puedes cancelarlo desde esta página.`)
};

const de_settings_delete_dialog_text = /** @type {(inputs: Settings_Delete_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Konto wird in 14 Tagen gelöscht. Bis dahin kannst du es auf dieser Seite abbrechen.`)
};

const fr_settings_delete_dialog_text = /** @type {(inputs: Settings_Delete_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre compte sera supprimé dans 14 jours. D’ici là, vous pouvez annuler depuis cette page.`)
};

const it_settings_delete_dialog_text = /** @type {(inputs: Settings_Delete_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo account verrà eliminato tra 14 giorni. Fino ad allora puoi annullare da questa pagina.`)
};

const nl_settings_delete_dialog_text = /** @type {(inputs: Settings_Delete_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je account wordt over 14 dagen verwijderd. Tot die tijd kun je het op deze pagina annuleren.`)
};

const pl_settings_delete_dialog_text = /** @type {(inputs: Settings_Delete_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje konto zostanie usunięte za 14 dni. Do tego czasu możesz to anulować na tej stronie.`)
};

const pt_settings_delete_dialog_text = /** @type {(inputs: Settings_Delete_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua conta será excluída em 14 dias. Até lá, você pode cancelar nesta página.`)
};

const ru_settings_delete_dialog_text = /** @type {(inputs: Settings_Delete_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Аккаунт будет удалён через 14 дней. До этого удаление можно отменить на этой странице.`)
};

const sv_settings_delete_dialog_text = /** @type {(inputs: Settings_Delete_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt konto raderas om 14 dagar. Fram till dess kan du avbryta på den här sidan.`)
};

const tr_settings_delete_dialog_text = /** @type {(inputs: Settings_Delete_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabın 14 gün içinde silinecek. O zamana kadar bu sayfadan iptal edebilirsin.`)
};

const zh_settings_delete_dialog_text = /** @type {(inputs: Settings_Delete_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的账户将在 14 天后删除。在此之前，你可以在本页面取消。`)
};

const ja_settings_delete_dialog_text = /** @type {(inputs: Settings_Delete_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントは 14 日後に削除されます。それまではこのページから取り消せます。`)
};

/**
* | output |
* | --- |
* | "Your account is deleted in 14 days. Until then you can cancel from this page." |
*
* @param {Settings_Delete_Dialog_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_dialog_text = /** @type {((inputs?: Settings_Delete_Dialog_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Dialog_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_dialog_text(inputs)
	if (locale === "de") return de_settings_delete_dialog_text(inputs)
	if (locale === "fr") return fr_settings_delete_dialog_text(inputs)
	if (locale === "it") return it_settings_delete_dialog_text(inputs)
	if (locale === "nl") return nl_settings_delete_dialog_text(inputs)
	if (locale === "pl") return pl_settings_delete_dialog_text(inputs)
	if (locale === "pt") return pt_settings_delete_dialog_text(inputs)
	if (locale === "ru") return ru_settings_delete_dialog_text(inputs)
	if (locale === "sv") return sv_settings_delete_dialog_text(inputs)
	if (locale === "tr") return tr_settings_delete_dialog_text(inputs)
	if (locale === "zh") return zh_settings_delete_dialog_text(inputs)
	if (locale === "ja") return ja_settings_delete_dialog_text(inputs)
	return en_settings_delete_dialog_text(inputs)
});
