/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_Done_TextInputs */

const en_jams_booth_done_text = /** @type {(inputs: Jams_Booth_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your votes are saved. You can change them until voting closes.`)
};

const es_jams_booth_done_text = /** @type {(inputs: Jams_Booth_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus votos están guardados. Puedes cambiarlos hasta que cierre la votación.`)
};

const de_jams_booth_done_text = /** @type {(inputs: Jams_Booth_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Stimmen sind gespeichert. Du kannst sie ändern, bis die Abstimmung endet.`)
};

const fr_jams_booth_done_text = /** @type {(inputs: Jams_Booth_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos votes sont enregistrés. Vous pouvez les modifier jusqu'à la fin du vote.`)
};

const it_jams_booth_done_text = /** @type {(inputs: Jams_Booth_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi voti sono salvati. Puoi modificarli fino alla chiusura della votazione.`)
};

const nl_jams_booth_done_text = /** @type {(inputs: Jams_Booth_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je stemmen zijn opgeslagen. Je kunt ze wijzigen tot het stemmen sluit.`)
};

const pl_jams_booth_done_text = /** @type {(inputs: Jams_Booth_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje głosy są zapisane. Możesz je zmieniać do zakończenia głosowania.`)
};

const pt_jams_booth_done_text = /** @type {(inputs: Jams_Booth_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus votos foram salvos. Você pode alterá-los até o fim da votação.`)
};

const ru_jams_booth_done_text = /** @type {(inputs: Jams_Booth_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши оценки сохранены. Их можно менять до конца голосования.`)
};

const sv_jams_booth_done_text = /** @type {(inputs: Jams_Booth_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina röster är sparade. Du kan ändra dem tills röstningen stänger.`)
};

const tr_jams_booth_done_text = /** @type {(inputs: Jams_Booth_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylarınız kaydedildi. Oylama kapanana kadar değiştirebilirsiniz.`)
};

const zh_jams_booth_done_text = /** @type {(inputs: Jams_Booth_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的投票已保存，投票结束前都可以修改。`)
};

const ja_jams_booth_done_text = /** @type {(inputs: Jams_Booth_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票は保存されました。投票が締め切られるまで変更できます。`)
};

/**
* | output |
* | --- |
* | "Your votes are saved. You can change them until voting closes." |
*
* @param {Jams_Booth_Done_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_done_text = /** @type {((inputs?: Jams_Booth_Done_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_Done_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_done_text(inputs)
	if (locale === "de") return de_jams_booth_done_text(inputs)
	if (locale === "fr") return fr_jams_booth_done_text(inputs)
	if (locale === "it") return it_jams_booth_done_text(inputs)
	if (locale === "nl") return nl_jams_booth_done_text(inputs)
	if (locale === "pl") return pl_jams_booth_done_text(inputs)
	if (locale === "pt") return pt_jams_booth_done_text(inputs)
	if (locale === "ru") return ru_jams_booth_done_text(inputs)
	if (locale === "sv") return sv_jams_booth_done_text(inputs)
	if (locale === "tr") return tr_jams_booth_done_text(inputs)
	if (locale === "zh") return zh_jams_booth_done_text(inputs)
	if (locale === "ja") return ja_jams_booth_done_text(inputs)
	return en_jams_booth_done_text(inputs)
});
