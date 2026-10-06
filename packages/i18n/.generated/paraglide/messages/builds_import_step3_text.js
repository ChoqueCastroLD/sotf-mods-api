/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ key: NonNullable<unknown> }} Builds_Import_Step3_TextInputs */

const en_builds_import_step3_text = /** @type {(inputs: Builds_Import_Step3_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`In game, press ${i?.key} to open BuildShare, pick the build and place it. Right-click switches between corner and free placement, the mouse wheel moves it and Esc cancels.`)
};

const es_builds_import_step3_text = /** @type {(inputs: Builds_Import_Step3_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En el juego, pulsa ${i?.key} para abrir BuildShare, elige la build y colócala. El clic derecho cambia entre colocación por esquinas y libre, la rueda del ratón la mueve y Esc cancela.`)
};

const de_builds_import_step3_text = /** @type {(inputs: Builds_Import_Step3_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Drücke im Spiel ${i?.key}, um BuildShare zu öffnen, wähle den Build und platziere ihn. Rechtsklick wechselt zwischen Ecken- und freier Platzierung, das Mausrad verschiebt ihn und Esc bricht ab.`)
};

const fr_builds_import_step3_text = /** @type {(inputs: Builds_Import_Step3_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En jeu, appuyez sur ${i?.key} pour ouvrir BuildShare, choisissez la build et placez-la. Le clic droit alterne entre placement par les coins et placement libre, la molette la déplace et Échap annule.`)
};

const it_builds_import_step3_text = /** @type {(inputs: Builds_Import_Step3_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nel gioco, premi ${i?.key} per aprire BuildShare, scegli la build e piazzala. Il clic destro alterna il posizionamento sugli angoli e quello libero, la rotellina la sposta ed Esc annulla.`)
};

const nl_builds_import_step3_text = /** @type {(inputs: Builds_Import_Step3_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Druk in de game op ${i?.key} om BuildShare te openen, kies de build en plaats hem. Rechtsklikken wisselt tussen hoek- en vrije plaatsing, het muiswiel verplaatst hem en Esc annuleert.`)
};

const pl_builds_import_step3_text = /** @type {(inputs: Builds_Import_Step3_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`W grze naciśnij ${i?.key}, aby otworzyć BuildShare, wybierz build i postaw go. Prawy przycisk myszy przełącza między stawianiem narożnikami a swobodnym, kółko myszy go przesuwa, a Esc anuluje.`)
};

const pt_builds_import_step3_text = /** @type {(inputs: Builds_Import_Step3_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No jogo, aperte ${i?.key} para abrir o BuildShare, escolha a build e posicione. O clique direito alterna entre posicionamento pelos cantos e livre, a roda do mouse move a construção e Esc cancela.`)
};

const ru_builds_import_step3_text = /** @type {(inputs: Builds_Import_Step3_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`В игре нажмите ${i?.key}, чтобы открыть BuildShare, выберите постройку и поставьте её. Правая кнопка мыши переключает установку по углам и свободную, колесо мыши двигает постройку, Esc отменяет.`)
};

const sv_builds_import_step3_text = /** @type {(inputs: Builds_Import_Step3_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tryck på ${i?.key} i spelet för att öppna BuildShare, välj bygget och placera det. Högerklick växlar mellan hörn- och fri placering, mushjulet flyttar det och Esc avbryter.`)
};

const tr_builds_import_step3_text = /** @type {(inputs: Builds_Import_Step3_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oyunda BuildShare’i açmak için ${i?.key} tuşuna bas, yapıyı seç ve yerleştir. Sağ tık köşe ve serbest yerleştirme arasında geçiş yapar, fare tekerleği yapıyı taşır ve Esc iptal eder.`)
};

const zh_builds_import_step3_text = /** @type {(inputs: Builds_Import_Step3_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`在游戏中按 ${i?.key} 打开 BuildShare，选择建筑并放置。右键可在贴角放置与自由放置之间切换，鼠标滚轮可移动建筑，按 Esc 取消。`)
};

const ja_builds_import_step3_text = /** @type {(inputs: Builds_Import_Step3_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ゲーム内で ${i?.key} を押して BuildShare を開き、建築を選んで配置します。右クリックで角合わせ配置と自由配置を切り替え、マウスホイールで移動、Esc でキャンセルします。`)
};

/**
* | output |
* | --- |
* | "In game, press {key} to open BuildShare, pick the build and place it. Right-click switches between corner and free placement, the mouse wheel moves it and Es..." |
*
* @param {Builds_Import_Step3_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_step3_text = /** @type {((inputs: Builds_Import_Step3_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Step3_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_step3_text(inputs)
	if (locale === "de") return de_builds_import_step3_text(inputs)
	if (locale === "fr") return fr_builds_import_step3_text(inputs)
	if (locale === "it") return it_builds_import_step3_text(inputs)
	if (locale === "nl") return nl_builds_import_step3_text(inputs)
	if (locale === "pl") return pl_builds_import_step3_text(inputs)
	if (locale === "pt") return pt_builds_import_step3_text(inputs)
	if (locale === "ru") return ru_builds_import_step3_text(inputs)
	if (locale === "sv") return sv_builds_import_step3_text(inputs)
	if (locale === "tr") return tr_builds_import_step3_text(inputs)
	if (locale === "zh") return zh_builds_import_step3_text(inputs)
	if (locale === "ja") return ja_builds_import_step3_text(inputs)
	return en_builds_import_step3_text(inputs)
});
